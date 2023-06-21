var express = require('express');
var authRouter = express.Router();
const authController = require('../controllers/authController');
/*************************************************************/



/*************************************************************/
// authRouter.post('/createUser', )
authRouter.post('/org/createOrg', authController.createOrg);
authRouter.get('/org/findOrgByEmail', authController.findOrgByEmail);
/*************************************************************/
module.exports = authRouter;