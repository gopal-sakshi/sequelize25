const authDb = require('../db23/authDbManager');
authDb.sequelize.sync()
.then(() => console.log('synced auth db'))
.catch((err) => console.log(err));
/*************************************************************/

const createOrg = async (req, res, next) => {    
    res.send(await authDb.org23.createOrg(req.body));
}

const findOrgByEmail = async (req, res, next) => {
    res.send(await authDb.org23.findOrgByEmail(req.body.email23));
}

const findAllFn = async (req, res, next) => {
    res.send(await authDb.org23.findAllFn());
}
/*************************************************************/
module.exports = {
    createOrg: createOrg,
    findOrgByEmail: findOrgByEmail,
    findAllFn: findAllFn
}