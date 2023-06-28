const tenantDb = require('../db23/tenantDb12Manager');

tenantDb.sequelize.sync()
.then(() => console.log('synced tenant db'))
.catch((err) => console.log(err));

const dummyQuery = async (req, res, next) => {  
    res.send(await tenantDb.LiveAgentStatus.getTimeDummyQuery());
}

module.exports = {
    dummyQuery:dummyQuery
}