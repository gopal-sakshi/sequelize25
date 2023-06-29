module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var ServerMwLogger = sequelize.define('ServerMwLogger', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        socketId: DataTypes.STRING,
        isClient: DataTypes.BOOLEAN,
        clientId: DataTypes.STRING, 
        agentId: DataTypes.STRING,
        createdTs23: DataTypes.DATE
    }, { tableName: 'server_mw_logger', timestamps: false });

    ServerMwLogger.createEntry = async (socketId, clientId, agentId) => {
        var payload = {
            socketId: socketId, 
            createdTs23: Date.now(),
            isClient: clientId ? true : false,
            clientId: clientId ? clientId: null,
            agentId: agentId ? agentId : null
        }
        console.log(' -------------------->', payload);
        return ServerMwLogger.build(payload).save();
    }

    return ServerMwLogger;
}