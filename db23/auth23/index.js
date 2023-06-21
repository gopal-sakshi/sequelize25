const Sequelize = require("sequelize");
const authDbInstance = new Sequelize('auth23', 'postgres', 'postgres', {
    host: '127.0.0.1',
    dialect: 'postgres',
    port: '5444',
    pool: {
        max: 5,             // maximum number of connection in pool
        min: 0,             // minimum number of connection in pool
        acquire: 30000,     // max time that pool will try to get connection before throwing error
        idle: 10000         // max time a connection can be idle, before being released
    }
});

const authDb = {};

authDb.Sequelize = Sequelize;
authDb.sequelize = authDbInstance;

authDb.org23 = require("./org23")(authDbInstance, Sequelize);
authDb.user23 = require("./user23")(authDbInstance, Sequelize);

module.exports = authDb;