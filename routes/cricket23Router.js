var express = require('express');
var cricketRouter = express.Router();
const cricketController = require('../controllers/cricketDbController');
/*************************************************************/



/*************************************************************/
cricketRouter.get('/teams23/getAllTeams', cricketController.getAllTeans);
cricketRouter.post('/teams23/createTeam', cricketController.createTeam);
cricketRouter.get('/ipl2018/getSomeStats', cricketController.getSomeStats);
cricketRouter.get('/player23/getBowlers', cricketController.getBowlers);
cricketRouter.post('/player23/createPlayer', cricketController.createPlayer);
/*************************************************************/
module.exports = cricketRouter;