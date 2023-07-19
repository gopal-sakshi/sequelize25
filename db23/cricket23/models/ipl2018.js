module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var ipl2018 = sequelize.define('ipl2018', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        team_id: DataTypes.STRING,
        team: DataTypes.STRING,
        player: DataTypes.STRING,
        matches: DataTypes.INTEGER,
        runs_scored: DataTypes.INTEGER,
        overs_bowled: DataTypes.FLOAT,
        wkts_taken: DataTypes.INTEGER
    }, { tableName: 'ipl2018', timestamps: false});

    ipl2018.getSomeStats = function() {
        return ipl2018.findAll({
            offset: 5, limit: 10
        });
    }

    return ipl2018;
}