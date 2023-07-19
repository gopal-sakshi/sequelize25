module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define('currency23', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, { tableName: 'currency23', paranoid: true });
    return Currency;
};