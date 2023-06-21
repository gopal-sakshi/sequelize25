const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

/******************************************************************/
const authRouter = require('./routes/auth23Router');


app.use('/auth', authRouter);
/******************************************************************/




/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app