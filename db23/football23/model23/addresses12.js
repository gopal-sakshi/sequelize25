module.exports = (sequelize, Sequelize, dbObject) => {
    const address12 = sequelize.define('address12', {
        addressId: {
            type: Sequelize.DataTypes.UUID,
            allowNull: false,
            primaryKey: true
        },
        building:Sequelize.DataTypes.STRING, 
        street: Sequelize.DataTypes.STRING,
        city: Sequelize.DataTypes.STRING
    });
    return address12;
}