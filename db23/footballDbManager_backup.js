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
    query: { raw:true },
    logging: console.log,
    // logging: dbSettings.logging,
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool
});

const footballDb = {};


footballDb.Sequelize = Sequelize;
footballDb.sequelize = footballDbInstance;

footballDb.clubs12 = require("./football23/clubs12")(footballDbInstance, Sequelize);
footballDb.footballers12 = require("./football23/footballers12")(footballDbInstance, Sequelize, footballDb);

/*

insert into clubs12 values
(1, 'RM', 'bernabeu', 'Spain', '2023-09-15 09:46:15.579913+05:30', '2023-09-15 09:46:15.579913+05:30'),
(2, 'Barca', 'camp nou', 'Spain', '2023-09-15 09:46:15.579913+05:30', '2023-09-15 09:46:15.579913+05:30'),
(3, 'atleti', 'calderon', 'Spain', '2023-09-15 09:46:15.579913+05:30', '2023-09-15 09:46:15.579913+05:30'),
(4, 'man u', 'old trafford', 'england', '2023-09-15 09:46:15.579913+05:30', '2023-09-15 09:46:15.579913+05:30');

insert into footballers12 values 
(1, 'vini', 'winger', '2023-09-15 09:46:15.579913+05:30', '2023-09-15 09:46:15.579913+05:30', 1)

*/

// User.hasMany(Task);              // Will add userId to Task model
// Task.belongsTo(User);            // Will also add userId to Task model

// APPROACH 01
// footballDb.footballers12.belongsTo(footballDb.clubs12);             ## README22

// APPROACH 02
footballDb.footballers12.belongsTo(footballDb.clubs12, {
    foreignKey: 'clubId33'            
});         // use either this (or) 02a ===> both does the same thing; no need to use both

// APPROACH 02a         // a club can have only 1 captain... so, hasOne works here
// footballDb.clubs12.hasOne(footballDb.footballers12, {foreignKey: {allowNull:false}});

// VERY_IMPORTANT...
    // there is absolutely no difference between belongsTo & hasOne
    // its just that where the foreignKey is located
    // dont take literal meanings "belongsTo" (or) "hasOne"; they dont mean anything
    // just find where you need foreignKey column... 
    // randomly pick sourceModel & targetModel... then use "belongsTo" (or) "hasOne" accordingly
    // keep revising.... bs = 'B'elongsTo creates foreignKey on 'S'ourceModel
    // so, approach 02 & approach 2a ===> both accomplish the samem thing
    // read associations_belongsTo.md for explanation       #explain23232

// APPROACH 03
// footballDb.footballers12.hasOne(footballDb.clubs12);
// its just plain wrong... hasOne ====> used to define 1-1 relationship
// this creates footballers12_id column on clubs12 ===> which doesnt make sense... think about it


// APPROACH 04 (add captain_id) to clubs12 table (use either 04 (or) 04a )
// footballDb.clubs12.belongsTo(footballDb.footballers12, {
//     as: 'captain12', foreignKey: {allowNull:false}
// });      // fk constraint
// footballDb.clubs12.belongsTo(footballDb.footballers12, {
//     as: 'captain12'
// });      // can create clubs before creating footballers (no foreignkey constraint)

// APPROACH 04a (add captain_id) to clubs12 table
footballDb.footballers12.hasOne(footballDb.clubs12, {as: 'captain12'});

// footballDbInstance.sync({force:true})
// // .then(() => seed23())
// .then(() => { return footballDb.clubs12.findOne() })
// .then((data11) => { console.log(data11) })


module.exports = footballDb;

/******************** README22
just this line may (or) may not add foreignKey constraints in the database
many ORMs (like sequelize) handle this belongsTo, hasMany internally
if you want for foreignKey constraints in the database itself, do these additionally
    use pair of association statements ====> hasMany & belongsTo
    declare actions for onUpdate, onDelete


Update23
- even though not specifigy onUpdate, onDelete ==> no problem
- it will create foreignKey constraints
- just that without specifying onUpdate, onDelete 
    sequelize.create() ===> will not write foriegnKey declarations into actual database
/*****************/