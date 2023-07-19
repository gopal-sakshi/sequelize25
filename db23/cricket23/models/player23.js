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
        club: {
            type: DataTypes.STRING,
            references: { model: 'teams23', key: 'club' }       // WORKING
        }
    }, { tableName: 'player23', timestamps: false, validate: validateFn});

    // A.belongsTo(B) association means that 
        // a One-To-One relationship exists between A & B
        // with the foreign key being defined in the source model ( A )

    // NOT WORKINGGGGGGGGGGGGGGGGGGGGGGGGGGgg
    // player23.associate = function (db) {
    //     player23.belongsTo(db.teams23, { foreignKey: 'club'})
    // }

    player23.getBowlers = function() {
        return player23.findAll({
            where: { role: 'bowler' }
        });
    }

    return player23;
}