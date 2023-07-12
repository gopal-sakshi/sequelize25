module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var Org23 = sequelize.define('events23', {
        eventid: {
            type        : DataTypes.UUID,
            allowNull   : false,
            primaryKey  : true,
            defaultValue: DataTypes.UUIDV4
        },
        name: { type: DataTypes.STRING },
        teamCount: DataTypes.INTEGER,
        winnersList: { type: DataTypes.ARRAY, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'org23', timestamps: false});

    // Org23.associate = function (db) { }

    Org23.findOrgByEmail = function (email23) {
        return Org23.findOne({
            where : { emailId: email23 }
        });
    }

    Org23.findAllFn = function() {
        return Org23.findAll({
            attributes: ['name', 'orgId']
        })
    }

    Org23.createOrg = async (payload) => {
        return await Org23.build(payload).save();
        // return await Org23.create(payload);
    }

    return Org23;
}