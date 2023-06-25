const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");
const oauth23DbInstance = new Sequelize('oauth23', dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
});

const oauth23Db = {};

authDb.Sequelize = Sequelize;
authDb.sequelize = oauth23DbInstance;

authDb.user = require("./oauth23/user")(oauth23DbInstance, Sequelize);
authDb.userAuth = require("./oauth23/userAuth")(oauth23DbInstance, Sequelize);


module.exports = oauth23Db;