module.exports = (dbInstance, SequelizeClass) => {
    // console.log(dbInstance);
    // console.log('----------------------------------------')
    // console.log(SequelizeClass);
    const Op = SequelizeClass.Op;
    // console.log(Op);
    var ipl2018 = dbInstance.define('ipl2018', {
        id: {
            type: SequelizeClass.DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_id: SequelizeClass.DataTypes.STRING,
        team: SequelizeClass.DataTypes.STRING,
        player: SequelizeClass.DataTypes.STRING,
        matches: SequelizeClass.DataTypes.INTEGER,
        runs_scored: SequelizeClass.DataTypes.INTEGER,
        overs_bowled: SequelizeClass.DataTypes.FLOAT,
        wkts_taken: SequelizeClass.DataTypes.INTEGER
    }, { tableName: 'ipl2018', timestamps: false});


    // ipl2018.associateTeams23 = function(db) {
    //     console.log('adding associationsssssssss')
    //     return ipl2018.belongsTo(db.teams23, {
    //         foreignKey: 'club'
    //     })
    // }

    ipl2018.getSomeStats = function() {
        return ipl2018.findAll({
            offset: 5, limit: 10
        });
    },

    ipl2018.logging23 = function() {
        return ipl2018.findAll({
            logging:console.log,
            // logging: (...msg) => console.log(msg), // Displays all log function call parameters
            // logging: false,                        // Disables logging
            // logging: msg => logger.debug(msg),     // custom logger (Winston or Bunyan), displays 1st param
            // logging: logger.debug.bind(logger),    // another way of custom logger, displays all messages
            where: { team_id: 'CSK' },
            raw:true        // returns raw result
        })
    }

    ipl2018.dynamicQuery1 = function(teamId, minRuns) {
        let where23 = { team_id: teamId }
        if(minRuns) { 
            where23.runs_scored = { [Op.gte]: minRuns } 
        }
        return ipl2018.findAll({
            where: where23,
            order: [["runs_scored", "DESC"],["player"]]
        })
    }

    ipl2018.update23 = function(oldTeamName, newTeamName) {
        // learn about Model.update() & record.update()
        // here also, we use Model.update(); bcoz ipl2018 is a model here
        return ipl2018.update(
            { team: newTeamName },
            { where: { team: oldTeamName }}
        )
    }

    return ipl2018;
}
/*
    some queries .....

insert into ipl2018 values 
(5, 'MI', 'Mumbai Indians', 'K Pollard', 9, 1333, 0, 0),
(6, 'MI', 'Mumbai Indians', 'R Sharma', 14, 286, 0, 0)

insert into teams23 (team_name, ground, owner, champions) values
('CSK', 'chennai', 'srinivasan', ARRAY [2010, 2011, 2018, 2021, 2023]),
('MI', 'mumbai', 'ambani', ARRAY [2013,2015,2017,2019,2020]),
('SRH', 'hyderabad', 'sun network', ARRAY [2009, 2016]),
('KKR', 'kolkata', 'shah rukh khan', ARRAY [2012,2014]),
('RR', 'jaipur', 'shilpa shetty', ARRAY [2008]),
('PKXI','mohali','priety zinta', ARRAY []::integer[]),
('RCB', 'bangalore', 'united spirits', ARRAY []::integer[]),
('DC', 'delhi', 'jindal steel' , ARRAY []::integer[]);

insert into teams23 (club, ground, owner, champions) values
('CSK', 'chepauk', 'srinivasan', ARRAY [2010, 2011, 2018, 2021, 2023]),
('MI', 'wankhede', 'ambani', ARRAY [2013,2015,2017,2019,2020]),
('SRH', 'rajiv gandhi', 'sun network', ARRAY [2009, 2016]),
('KKR', 'eden gardens', 'shah rukh khan', ARRAY [2012,2014]),
('RR', 'sawai mansingh', 'shilpa shetty', ARRAY [2008]),
('PKXI','mohali','priety zinta', ARRAY []::integer[]),
('RCB', 'chinnaswamy', 'united spirits', ARRAY []::integer[]),
('DC', 'arun jaitley', 'jindal steel' , ARRAY []::integer[]);

*/