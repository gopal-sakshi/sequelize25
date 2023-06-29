const tenantDb = require('../db23/tenantDb12Manager');

tenantDb.sequelize.sync()
.then(() => console.log('synced tenant db'))
.catch((err) => console.log(err));
/************************** ROUTES ******************************/
const dummyQuery = async (req, res, next) => {  
    res.send(await tenantDb.LiveAgentStatus.getTimeDummyQuery());
}
/****************************************************************/
const createEntry = async (socketId, clientId, agentId) => {
    return tenantDb.ServerMwLogger.createEntry(socketId, clientId, agentId);
}
/****************************************************************/

module.exports = {
    dummyQuery:dummyQuery,
    createEntry:createEntry
}