const tenantDb = require('../db23/tenantDb12Manager');

tenantDb.sequelize.sync()
.then(() => console.log('synced tenant db'))
.catch((err) => console.log(err));
/************************** ROUTES ******************************/
const dummyQuery = async (req, res, next) => {  
    res.send(await tenantDb.LiveAgentStatus.getTimeDummyQuery());
}
/****************************************************************/
const createEntry = async (socketId) => {
    return tenantDb.ServerMwLogger.createEntry(socketId);
}
/****************************************************************/

module.exports = {
    dummyQuery:dummyQuery,
    createEntry:createEntry
}