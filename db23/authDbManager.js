const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");
console.log('user ==============> ', dbSettings.user);
console.log('user ==============> ', dbSettings.password);
const authDbInstance = new Sequelize('auth23', dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
});

const authDb = {};

authDb.Sequelize = Sequelize;
authDb.sequelize = authDbInstance;

authDb.org23 = require("./auth23/org23")(authDbInstance, Sequelize);
authDb.user23 = require("./auth23/user23")(authDbInstance, Sequelize);

module.exports = authDb;

/********************************************************

SYNTAX explained

// This function 'model23' takes two params ---> databaseInstance & SequelizeLibrary
    // it returns a "model"
    // we create a property on authDb
    // and assign this property that returned "model"

const model23 = (seq, Dt) => {
    const org23 = sequelize.define('org23', { }, { tableName: '', timeStamps: false });
    return org23;
}

authDb.org23 = model23(authDbInstance, Sequelize);



********************************************************/