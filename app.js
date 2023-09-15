const express = require("express");
const footballDbManager = require('./db23/footballDbManager');
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

app.use('/auth', authRouter);
app.use('/oauth23', oauth23Router);
app.use('/cricket23', cricketRouter);
app.use('/tenant44', tenantRouter);

app.use('/seedFootball', async (req, res) => {
    var blah22 = await footballDbManager.footballers12.findAll({

        attributes: { exclude: ['createdAt', 'updatedAt'] },

        // include:[{ model: footballDbManager.clubs12 }],              // approach 01
        // include:[footballDbManager.clubs12],                            // approach 02
        include:[{ model: footballDbManager.clubs12, attributes: ['stadium12', 'name12'] }],
        
        raw: true           // for some reason, this is needed to work with associations ???
    });
    // var blah22 = await footballDbManager.footballers12.findAll({})
    res.send(blah22);
});

app.use('/getAttributes', async (req, res) => {
    var attr11 = Object.keys(footballDbManager.footballers12.rawAttributes);
    res.send(attr11)
});

app.use('/addTeam', async (req, res) => {
    if(req.body.captain) {
        var captain22 = await footballDbManager.footballers12.findOne({
            where: { name11: req.body.captain }
        });
    }
    console.log(captain22);
    console.log(' =============>', captain22.id);
    var newTeam = await footballDbManager.clubs12.create({
        name12: req.body.name,
        stadium12: req.body.stadium,
        country12: req.body.country,
        captian12_id : captain22 ? captain22.id : null
    });
    res.send(newTeam);
});

app.use('/addPlayer', async (req, res) => {
    var blah22 = await footballDbManager.footballers12.create({
        name11: req.body.name11,
        position23: req.body.position23,
        clubs12Id: req.body.clubs12_id              // why is it not clubs12_id     ??
    });
    blah22.setClubs12()
    res.send(blah22);
});

app.use('/useAssociations1', async (req, res) => {
    // var blah12 = await footballDbManager.clubs12.findAll({
    //     include: [{ model: footballDbManager.footballers12, attributes: [ 'name11' ] }] 
    // });
    var blah12 = await footballDbManager.footballers12.findAll({
        include: [{ model: footballDbManager.clubs12, attributes: ['name12'] } ]
    });
    res.send(blah12);
})
/******************************************************************/




/******************************************************************/
app.use('/', (req, res, next) => {
    res.send('you have hit base path');
});
/******************************************************************/

module.exports = app