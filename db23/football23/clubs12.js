module.exports = (sequelize, DataTypes) => {
    const clubs12 = sequelize.define('clubs12', {
        name12: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stadium12: DataTypes.STRING,
        country12: DataTypes.STRING,
        meta23: DataTypes.JSONB
    }, { tableName: 'clubs12' });
    return clubs12;
};