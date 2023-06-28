const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");
const tenantDbInstance = new Sequelize('tenant23', dbSettings.user, dbSettings.password, {
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
});

const tenantDb = {};

tenantDb.Sequelize = Sequelize;
tenantDb.sequelize = tenantDbInstance;

tenantDb.LiveAgentStatus = require("./tenantDb12/liveAgentStatus12")(tenantDbInstance, Sequelize);
tenantDb.LiveAgentTransfer = require("./tenantDb12/liveAgentTransfer12")(tenantDbInstance, Sequelize);
tenantDb.SupportConversation = require("./tenantDb12/SupportConversation12")(tenantDbInstance, Sequelize);
tenantDb.SupportMessage = require("./tenantDb12/SupportMessage12")(tenantDbInstance, Sequelize);


module.exports = tenantDb;