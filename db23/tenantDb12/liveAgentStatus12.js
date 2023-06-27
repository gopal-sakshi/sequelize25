module.exports = (sequelize, DataTypes) => {
    const Op = sequelize.Op;
    var LiveAgentStatus = sequelize.define('LiveAgentStatus', {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: DataTypes.UUID, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false, defaultValue: undefined },
        startTime: { type: DataTypes.DATE, allowNull: false },
        endTime: { type: DataTypes.DATE, allowNull: true },
        duration: { type: DataTypes.STRING, allowNull: true },
    }, { tableName: 'live_agent_status' });

    LiveAgentStatus.getAgentLatestDetails = function (agentId) {
        return LiveAgentStatus.findOne({
            where: { userId: agentId },
            order: [['updatedAt', 'DESC']]
        });
    };

    LiveAgentStatus.insertAgent = function (agentId, agentStatus, agentStartTime) {
        return LiveAgentStatus.create({
            userId: agentId,
            status: agentStatus,
            startTime: agentStartTime
        });
    };

    LiveAgentStatus.updateAgent = function (agentEndTime, agentDuration, agentId, oldStatus) {
        return LiveAgentStatus.update({ endTime: agentEndTime, duration: agentDuration },
        {
            where: {
                userId: agentId,
                endTime: null,
                status: oldStatus
            }
        });
    };

    return LiveAgentStatus;
}