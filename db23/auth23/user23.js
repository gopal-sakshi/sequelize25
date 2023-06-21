module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var User23 = sequelize.define('user23', {
        id: {
            type        : DataTypes.UUID,
            allowNull   : false,
            primaryKey  : true,
            defaultValue: DataTypes.UUIDV4
        },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        orgId: { type: DataTypes.UUID },
        emailId: {
            type     : DataTypes.STRING,
            allowNull: false,
            validate : { isEmail: true }
        },
        hash: { type     : DataTypes.TEXT, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'User23', timestamps: false});

    // User23.associate = function (db) {
    //     User23.belongsTo(db.Org23, { 
    //         as: 'Org23',
    //         foreignKey: { allowNull: false },
    //         onDelete: 'cascade'
    //     })
    // }

    User23.findByEmail = function (email23) {
        return User23.findOne({
            where : { emailId: email23 }
        });
    }

    return User23;
}