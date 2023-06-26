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
        hash: { type: DataTypes.TEXT, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'org23', timestamps: false});

    // Org23.associate = function (db) { }

    Org23.findOrgByEmail = function (email23) {
        return Org23.findOne({
            where : { emailId: email23 }
        });
    }

    Org23.findAllOrg = function() {
        return Org23.findAll()
    }

    Org23.createOrg = async (payload) => {
        return await Org23.build(payload).save();
        // return await Org23.create(payload);
    }

    return Org23;
}