function validateFn() {
    console.log('validation added');
}
module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var ROLES = ['batsman', 'wk', 'bowler', 'allrounder', 'giliga'];
    var player23 = sequelize.define('player23', {
        player: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        country: DataTypes.STRING,
        role: {  type: DataTypes.ENUM(...ROLES) },
        club: DataTypes.STRING
    }, { tableName: 'player23', timestamps: false, validate: validateFn});

    player23.getBowlers = function() {
        return player23.findAll({
            where: { role: 'bowler' }
        });
    }

    return player23;
}