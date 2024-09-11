const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");

const seed23 = () => {
    return Promise.all([
        footballDb.clubs12.create({ name12: 'Real Madrid', stadium12: 'Bernabeu', country12: 'Spain' }),
        footballDb.clubs12.create({ name12: 'Atletico', stadium12: 'Calderon', country12: 'Spain' }),
        footballDb.clubs12.create({ name12: 'ManU', stadium12: 'Old Trafford', country12: 'England' }),
        footballDb.footballers12.create({ name11: 'benz', position23: 'striker' }),
        footballDb.footballers12.create({ name11: 'modric', position23: 'midfield' }),
        footballDb.footballers12.create({ name11: 'alaba', position23: 'center back' }),
        footballDb.footballers12.create({ name11: 'vini', position23: 'winger' }),
        footballDb.footballers12.create({ name11: 'savic', position23: 'center back' }),
        footballDb.footballers12.create({ name11: 'koke', position23: 'midfield' }),
        footballDb.footballers12.create({ name11: 'maguire', position23: 'center back' }),
    ])
    .then(([rm,atleti,manu, benz,modric,alaba,vini,savic,koke, maguire]) => {
        return Promise.all([
            benz.setClubs12(rm),
            modric.setClubs12(rm),
            alaba.setClubs12(rm),
            vini.setClubs12(rm),
            savic.setClubs12(atleti),
            koke.setClubs12(atleti),
            maguire.setClubs12(manu)
        ])
    })
    .catch(error => console.log(error));
};

const footballDbInstance = new Sequelize('football23', dbSettings.user, dbSettings.password, {
    // query: { raw:true },            // I commented raw:true ===> so that associations will work
    logging: console.log,
    // logging: dbSettings.logging,
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    define: { timestamps: false },
    logQueryParameters: true
});

const footballDb = {};

footballDb.Sequelize = Sequelize;
footballDb.sequelize = footballDbInstance;

footballDb.clubs12 = require("./football23/model23/clubs12")(footballDbInstance, Sequelize);
footballDb.footballers12 = require("./football23/model23/footballers12")(footballDbInstance, Sequelize, footballDb);
footballDb.address12 = require("./football23/model23/addresses12")(footballDbInstance, Sequelize, footballDb);

// footballDbInstance.sync({force:true}).then(() => 
//     seed23()
// );

function doAssociations23 () {
    console.log('seeeded asosss======================');
    footballDb.footballers12.belongsTo(footballDb.clubs12, 
        { foreignKey: 'clubId33' },
        { onDelete: 'SET NULL' }
    );

    // if you do this ===> clubs12 is associated to footballers12
    // but not viceversa ===> footballers12 is NOT YET associated to clubs12
    // meaning, you can only do footballers12.findAll({ include: [clubs12] })
    // but you CAN NOT DO clubs12.findAll({ include: [footballers12] })
    // footballDb.footballers12.hasOne(footballDb.clubs12,
    //     { as: 'captain12' },
    //     { onDelete: 'SET NULL' }
    // );
    // In SHORT ====> All associations add methods to the source model (getX, setX, )

    // SO USE THISSSSSSS =========> for associations to work both ways
    footballDb.clubs12.belongsTo(footballDb.footballers12, 
        { as: 'captain12' },
        { onDelete: 'SET NULL' }
    );

    // clubs12Id is created on footballers12 table
    footballDb.clubs12.hasMany(footballDb.footballers12,
        { onDelete: 'SET NULL' }
    );

}
doAssociations23();


module.exports = footballDb;


/*

insert into footballers12 values
(2, 'modric', 'midfield', 1),
(3, 'kroos', 'midfield', 1),
(4, 'benzema', 'forward', 1),
(6, 'vinicius', 'forward', 1),
(7, 'rodrygo', 'forward', 1);
(8, 'alaba', 'defender', 1),
(9, 'puyol', 'defender', 2),
(10, 'lewa', 'forward', 2),
(11, 'pedri', 'midfield', 2),
(12, 'valverder', 'midfield', 1);

--- custom sort ----
(A)
select * from footballers12 
order by case
	when position23 = 'defender' then 1
	when position23 = 'midfield' then 2
	when position23 = 'forward' then 3
    else 4
end;

(B)
SELECT * FROM footballers12
ORDER BY 
array_position(array['defender','midfield','forward'], position23);


(C)
SELECT * FROM footballers12
JOIN (VALUES ('defender', 1), ('midfield',2), ('forward', 3)) 
AS oye12(value44, sorting_number11) ON position23 = oye12.value44
ORDER BY oye12.sorting_number11;

*/