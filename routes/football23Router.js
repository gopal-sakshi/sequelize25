var express = require('express');
var fbRouter = express.Router();
const footballDbManager = require('../db23/footballDbManager');
/*************************************************************/

fbRouter.use('/seedFootball', async (req, res) => {
    var blah22 = await footballDbManager.footballers12.findAll({

        attributes: { exclude: ['createdAt', 'updatedAt'] },

        // include:[{ model: footballDbManager.clubs12 }],              // approach 01
        // include:[footballDbManager.clubs12],                            // approach 02
        include:[{ model: footballDbManager.clubs12, attributes: ['stadium12', 'name12'] }],
        
        raw: true           // for some reason, this is needed to work with associations ???
    });
    res.send(blah22);
});

fbRouter.use('/getAttributes', async (req, res) => {
    var attr11 = Object.keys(footballDbManager.footballers12.rawAttributes);
    res.send(attr11)
});

fbRouter.use('/addTeam', async (req, res) => {
    if(req.body.captain) {
        var captain22 = await footballDbManager.footballers12.findOne({
            where: { name11: req.body.captain }
        });
    }
    console.log(captain22);
    console.log(' =============>', captain22 ? captain22.id : undefined );
    var newTeam = await footballDbManager.clubs12.create({
        name12: req.body.name,
        stadium12: req.body.stadium,
        country12: req.body.country,
        captain12Id : captain22 ? captain22.id : null
    });
    res.send(newTeam);
});

fbRouter.use('/addPlayer', async (req, res) => {
    var blah22 = await footballDbManager.footballers12.create({
        name11: req.body.name11,
        position23: req.body.position23,
        clubId33: req.body.clubId,              // why is it not clubs12_id     ??
        clubs12Id:req.body.clubId
    });
    // blah22.setClubs12(req.body.clubId);
    // await footballDbManager.clubs12.findOne({where: { id: req.body.clubId }}).footballers12()
    res.send(blah22);
});

fbRouter.use('/useAssociations1', async (req, res) => {
    var blah12 = { old:true };
    // if u use raw:true ===> associations not working
    var blah12 = await footballDbManager.footballers12.findAll({
        include: [{ model: footballDbManager.clubs12, attributes: ['name12'] } ]
    });
    res.send(blah12);
});

fbRouter.use('/useAssociations2', async (req, res) => {
    var blah12 = { old:true };
    // if u use raw:true ===> associations not working

    // ERROR: footballers12 is associated to clubs12 using an alias
    // blah12 = await footballDbManager.clubs12.findAll({
    //     include: [{ model: footballDbManager.footballers12, attributes: [ 'name11' ] }] 
    // });

    // WITH ALIAS
    blah12 = await footballDbManager.clubs12.findAll({
        include: [{ 
            model: footballDbManager.footballers12, 
            attributes: [ 'name11' ],
            as: 'captain12' 
        }] 
    });
    res.send(blah12);
});

fbRouter.use('/useAssociations3', async (req, res) => {
    blah12 = await footballDbManager.clubs12.findAll({
        include: [{ 
            model: footballDbManager.footballers12
        }] 
    });
    res.send(blah12);
});

fbRouter.use('/updateMeta23', async (req, res) => {
    var rmClub = await footballDbManager.clubs12.findByPk(1);
    
    // APPROACH 01
    // var meta23 = rmClub.meta23 || {};
    // meta23.isChanged = true;
    // meta23.updatedTs = Date.now();
    // var updatedRecord = await rmClub.update({meta23});
    // var dbRecord_rmClub = await footballDbManager.clubs12.findByPk(1);

    // APPROACH 02              // dbRecord is also updated.............
    // var newMeta = {
    //     ...rmClub.meta23,
    //     isChanged: true,
    //     updatedTs: Date.now()
    // } 
    // var updatedRecord = await rmClub.update({meta23: newMeta});
    // var dbRecord_rmClub = await footballDbManager.clubs12.findByPk(1);

    // APPROACH 03
    var meta23 = rmClub.meta23 || {};
    meta23.isChanged = true;
    meta23.updatedTs = Date.now();
    rmClub.changed('meta23', true);
    var updatedRecord = await rmClub.update({meta23});
    var dbRecord_rmClub = await footballDbManager.clubs12.findByPk(1);

    // readMe
    // since meta && rmClub.meta ====> both point to same thing
    // sequelize interprets this is not updated...
    // return value of .update() method is newValue ====> but the value in database isnt updated !!!
    // so, use APPROACH 02 (or) APPROACH 03

    res.send({oldRecord: rmClub, dbRecord: dbRecord_rmClub});
})
/*************************************************************/
module.exports = fbRouter;