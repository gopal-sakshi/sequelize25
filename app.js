const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/******************************************************************/
const authRouter = require('./routes/auth23Router');
const oauth23Router = require('./routes/oauth23Router');

app.use('/auth', authRouter);
app.use('/oauth23', oauth23Router);
/******************************************************************/




/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app