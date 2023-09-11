const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
/******************************************************************/
console.log('before loading ===> ', process.env.NAME);
const jc23 = require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` }); // loads the ENVI variables
// console.log(jc23);
// console.log(jc23.parsed);
// console.log(process.env.PORT);
console.log('after loading ====> ', process.env.NAME);
/*****************************************/
if(process.env.NAME == 'render') {
    const cricketRouter = require('./routes/cricket23Router');
    app.use('/cricket23', cricketRouter);
} else {
    const cricketRouter = require('./routes/cricket23Router');
    app.use('/cricket23', cricketRouter);
    const authRouter = require('./routes/auth23Router');
    const oauth23Router = require('./routes/oauth23Router');
    const tenantRouter = require('./routes/tenant23DbRouter');
    app.use('/auth', authRouter);
    app.use('/oauth23', oauth23Router);
    app.use('/tenant44', tenantRouter);
}
/******************************************************************/




/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app