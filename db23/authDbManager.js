const Sequelize = require("sequelize");
const authDbInstance = new Sequelize('auth23', 'postgres', '1258', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: '5432',
    pool: {
        max: 5,             // maximum number of connection in pool
        min: 0,             // minimum number of connection in pool
        acquire: 30000,     // max time that pool will try to get connection before throwing error
        idle: 10000         // max time a connection can be idle, before being released
    },
    logging: false
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