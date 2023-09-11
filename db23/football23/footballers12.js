module.exports = (sequelize, DataTypes) => {
    const footballers12 = sequelize.define('footballers12', {
        name11: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        position23: DataTypes.STRING
    }, {
        tableName: 'footballers12', 
        underscored: true                   // instead of clubId, it'll be club_id 
    });
    return footballers12;
};