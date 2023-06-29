module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var ServerMwLogger = sequelize.define('ServerMwLogger', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        socketId: DataTypes.STRING,
        createdTs23: DataTypes.DATE
    }, { tableName: 'server_mw_logger', timestamps: false });

    ServerMwLogger.createEntry = async (socketId) => {
        var payload = {
            socketId: socketId, 
            createdTs23: Date.now()
        }
        return ServerMwLogger.build(payload).save();
    }

    return ServerMwLogger;
}