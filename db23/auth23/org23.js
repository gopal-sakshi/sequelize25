module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var Org23 = sequelize.define('org23', {
        orgId: {
            type        : DataTypes.UUID,
            allowNull   : false,
            primaryKey  : true,
            defaultValue: DataTypes.UUIDV4
        },
        name: { type: DataTypes.STRING },
        emailId: {
            type     : DataTypes.STRING,
            allowNull: false,
            validate : { isEmail: true }
        },
        countries: { type: DataTypes.ARRAY(DataTypes.STRING) },
        hash: { type     : DataTypes.TEXT, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'Org23', timestamps: false});

    // Org23.associate = function (db) { }

    Org23.findByEmail = function (email23) {
        return Org23.findOne({
            where : { emailId: email23 }
        });
    }

    return Org23;
}