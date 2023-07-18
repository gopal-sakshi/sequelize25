var express = require('express');
var cricketRouter = express.Router();
const cricketController = require('../controllers/cricketDbController');
/*************************************************************/



/*************************************************************/
cricketRouter.get('/teams23/getAllTeams', cricketController.getAllTeans);
cricketRouter.get('/ipl2018/getSomeStats', cricketController.getSomeStats);
cricketRouter.get('/player23/getBowlers', cricketController.getBowlers);
/*************************************************************/
module.exports = cricketRouter;