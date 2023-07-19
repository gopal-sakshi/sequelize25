module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var teams23 = sequelize.define('teams23', {
        club: {
            type        : DataTypes.STRING,
            allowNull   : false,
            primaryKey  : true
        },
        ground: DataTypes.STRING,
        owner: DataTypes.STRING,
        champions: DataTypes.ARRAY(DataTypes.INTEGER)
    }, { tableName: 'teams23', timestamps: false});

    teams23.getAllTeams = function() {
        return teams23.findAll();
    }

    return teams23;
}