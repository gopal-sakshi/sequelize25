const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
/******************************************************************/
const authRouter = require('./routes/auth23Router');
const oauth23Router = require('./routes/oauth23Router');
const tenantRouter = require('./routes/tenant23DbRouter');
const cricketRouter = require('./routes/cricket23Router');
const footballRouter = require('./routes/football23Router');


app.use('/auth', authRouter);           // ignore IGNORE authRouter (2024-07-09)
app.use('/oauth23', oauth23Router);
app.use('/cricket23', cricketRouter);
app.use('/tenant44', tenantRouter);
app.use('/football23', footballRouter);
/******************************************************************/




/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app