const cricketDb = require('../db23/cricketDbManager');

/*************************************************************/
// ==== SYNC shouldnt be used in production ====
// ==== so, comment these forever ==============
// cricketDb.sequelize.sync({force:true})
// .then(() => console.log('synced cricket db'))
// .catch((err) => console.log(err));
/*************************************************************/

// IIFE ---> to test various methods of sequelize (logging, where, includes)
(async function learnSequelizeMethods() {
    
    try {
        
        var blah11 = await cricketDb.ipl2018.logging23();
        // var blah11 = await cricketDb.ipl2018.dynamicQuery1('CSK',200);
        // var blah11 = await cricketDb.ipl2018.update23('Chennai Super Kings', 'CSK23');
        console.log(blah11);



    } catch(err) {
        console.log(err);
    }

})();


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
    res.send(await cricketDb.player23.createPlayer(req))
    
}
/*************************************************************/
module.exports = {
    getAllTeans: getAllTeams,
    getSomeStats: getSomeStats,
    getBowlers: getBowlers,
    createPlayer: createPlayer
}