module.exports = (sequelize, DataTypes) => {
    var countries23 = sequelize.define('countries23', {
        id: DataTypes.STRING,
        name: DataTypes.STRING,
        events: { type: DataTypes.Array[DataTypes.STRING] }
    }, { tableName: 'countries23', timestamps: false })
}