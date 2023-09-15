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

function doAssociations23 () {
    console.log('seeeded asosss======================');
    footballDb.footballers12.belongsTo(footballDb.clubs12, {
        foreignKey: 'clubId33'            
    });
    footballDb.footballers12.hasOne(footballDb.clubs12, {as: 'captain12'});
}
doAssociations23();


module.exports = footballDb;