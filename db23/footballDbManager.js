const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");

const seed23 = () => {
    return Promise.all([
        footballDb.clubs12.create({ name12: 'Real Madrid', stadium12: 'Bernabeu', country12: 'Spain' }),
        footballDb.clubs12.create({ name12: 'Atletico', stadium12: 'Calderon', country12: 'Spain' }),
        footballDb.footballers12.create({ name11: 'benz', position23: 'striker' }),
        footballDb.footballers12.create({ name11: 'modric', position23: 'midfield' }),
        footballDb.footballers12.create({ name11: 'alaba', position23: 'center back' }),
        footballDb.footballers12.create({ name11: 'vini', position23: 'winger' }),
        footballDb.footballers12.create({ name11: 'savic', position23: 'center back' }),
        footballDb.footballers12.create({ name11: 'koke', position23: 'midfield' })
    ])
    .then(([rm,atleti,benz,modric,alaba,vini,savic,koke]) => {
        return Promise.all([
            benz.setClubs12(rm),
            modric.setClubs12(rm),
            alaba.setClubs12(rm),
            vini.setClubs12(rm),
            savic.setClubs12(atleti),
            koke.setClubs12(atleti)
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

footballDb.clubs12 = require("./football23/clubs12")(footballDbInstance, Sequelize);
footballDb.footballers12 = require("./football23/footballers12")(footballDbInstance, Sequelize, footballDb);

// footballDbInstance.sync({force:true});

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

    // SO USE THISSSSSSS =========> for associations to work both ways
    footballDb.clubs12.belongsTo(footballDb.footballers12, 
        { as: 'captain12' },
        { onDelete: 'SET NULL' }
    ); 



}
doAssociations23();


module.exports = footballDb;