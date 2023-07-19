const cricketDb = require('../db23/cricketDbManager');
cricketDb.sequelize.sync({force:true})
.then(() => console.log('synced cricket db'))
.catch((err) => console.log(err));
/*************************************************************/


const getAllTeams = async (req, res, next) => {
    res.send(await cricketDb.teams23.getAllTeams());
}
const getSomeStats = async (req, res, next) => {
    res.send(await cricketDb.ipl2018.getSomeStats());
}
const getBowlers = async (req, res, next) => {
    res.send(await cricketDb.player23.getBowlers());
}

/*************************************************************/
module.exports = {
    getAllTeans: getAllTeams,
    getSomeStats: getSomeStats,
    getBowlers: getBowlers
}