module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('user', {
        id: {
            type        : DataTypes.UUID,
            allowNull   : false,
            primaryKey  : true,
            defaultValue: DataTypes.UUIDV4
        },
        firstName: { type: DataTypes.STRING },
        lastName: { type: DataTypes.STRING },
        emailId: { type     : DataTypes.STRING },
        hash: { type: DataTypes.TEXT, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'user'});

    User.findByEmail = function (email23) {
        return User.findOne({
            where: { emailId: email23 }
        });
    }

    return User;
}