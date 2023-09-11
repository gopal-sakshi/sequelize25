const cricketDb = require('../db23/cricketDbManager');

/*************************************************************/
// ==== SYNC shouldnt be used in production ====
// ==== so, comment these forever ==============
// cricketDb.sequelize.sync({force:true})
// .then(() => console.log('synced cricket db'))
// .catch((err) => console.log(err));
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

const createPlayer = async(req, res, next) => {
    res.send(await cricketDb.player23.createPlayer(req.body));   
}

const createTeam = async(req, res) => {
    res.send(await cricketDb.teams23.createTeam(req.body))
}
/*************************************************************/
module.exports = {
    getAllTeans: getAllTeams,
    getSomeStats: getSomeStats,
    getBowlers: getBowlers,
    createPlayer: createPlayer,
    createTeam: createTeam
}