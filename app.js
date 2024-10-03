const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/******************************************************************/
const tenantRouter = require('./routes/tenant23DbRouter');
const cricketRouter = require('./routes/cricket23Router');
const footballRouter = require('./routes/football23Router');
const tutorialRouter = require('./routes/tutorialRouter');


app.use('/cricket23', cricketRouter);
app.use('/tenant44', tenantRouter);
app.use('/football23', footballRouter);
app.use('/tutorial', tutorialRouter);
/******************************************************************/



/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app