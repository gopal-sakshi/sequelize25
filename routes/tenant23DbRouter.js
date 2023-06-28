var express = require('express');
var tenantRouter = express.Router();
const tenantDbController = require('../controllers/tenantDbController');
/*************************************************************/



/*************************************************************/
tenantRouter.get('/dummy1', tenantDbController.dummyQuery);

/*************************************************************/
module.exports = tenantRouter;