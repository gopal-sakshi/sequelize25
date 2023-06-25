module.exports = (sequelize, DataTypes) => {
    var UserAuth = sequelize.define('user_auth', {
        id: {
            type        : DataTypes.UUID,
            allowNull   : false,
            primaryKey  : true,
            defaultValue: DataTypes.UUIDV4
        },
        tokenTimestamp: { type: DataTypes.BIGINT, allowNull: true },
		codeTimestamp: { type: DataTypes.BIGINT, allowNull: false },
		clientId: { type: DataTypes.STRING, allowNull: false },
		accessToken: { type: DataTypes.TEXT, allowNull: true },
		meta: { type: DataTypes.JSONB, allowNull: true }
    }, { tableName: 'user_auth'});

    return UserAuth;
}