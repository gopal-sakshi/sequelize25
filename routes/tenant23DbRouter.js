var express = require('express');
var tenantRouter = express.Router();
const tenantDbController = require('../controllers/tenantDbController');
/*************************************************************/


/*********************************************/
function utility1 (req, res) {
    res.send('waituuu');
}
/*********************************************/



/*************************************************************/
tenantRouter.get('/dummy1', tenantDbController.dummyQuery);
tenantRouter.get('/utility1', utility1);
/*************************************************************/
module.exports = tenantRouter;