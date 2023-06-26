var express = require('express');
var authRouter = express.Router();
const authController = require('../controllers/authController');
/*************************************************************/



/*************************************************************/
// authRouter.post('/createUser', )
authRouter.post('/org/createOrg', authController.createOrg);
authRouter.get('/org/findOrgByEmail', authController.findOrgByEmail);
authRouter.get('/org/findAllOrg', authController.findOrgByEmail);
/*************************************************************/
module.exports = authRouter;