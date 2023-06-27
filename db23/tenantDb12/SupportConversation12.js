const CONV_STATUS = {
    WAITING: 0,
    ACTIVE: 1,
    AGENT_DISCONNECTED: 2,
    CLIENT_DISCONNECTED: 3,
    CLOSED: 4
};

/*
    Methods
        getActiveConversationsByAgentId(agentSocketId)
        getByClient(clientId)
        getByClientSocketId(clientSocketId)
        assignAgent(id, agentId, agentSocketId)
        updateAgent(id, agentId, agentSocketId)

        getWaitingClientsCount()                                                SC.count({})
        getWaitingClient()                                                      SC.findOne
        getWaitingClientsList()                                                 SC.findAll

        getConversationStatusByClientSocketId(clientSocketId)
        getConversationByConversationId(id)


        markClientDisconnect(clientSocketId)
        markClientDisconnectById(id)
        markAgentDisconnect(agentSocketId)
        markAgentDisposed(agentSocketId,conversationId)
        markAgentDisconnectByAgentId(agentId)
        markDisposedByConversationId(conversationId)
*/

module.exports = function (sequelize, DataTypes) {
    const Op = sequelize.Op;
    var SupportConversation = sequelize.define("SupportConversation", {
        id: { type: DataTypes.UUID, allowNull: false, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
        customerId: { type: DataTypes.TEXT, allowNull: false, },
        clientSocketId: { type: DataTypes.TEXT, allowNull: false, },
        agentId: { type: DataTypes.TEXT, allowNull: true },
        agentSocketId: { type: DataTypes.TEXT, allowNull: true, },
        status: { type: DataTypes.INTEGER, allowNull: false, defaultValue: CONV_STATUS.WAITING },
        initialMessageId: { type: DataTypes.UUID, allowNull: true },
        integration: DataTypes.STRING,
        meta: DataTypes.JSONB
    }, { tableName: 'SupportConversation' });

    SupportConversation.getById = function (id) {
        return SupportConversation.findOne({ 
            where: { id: id }
        });
    };

    SupportConversation.getActiveConversationsByAgentId = function (agentSocketId) {
        return SupportConversation.findAll({
            where: {
                agentSocketId: agentSocketId,
                status: CONV_STATUS.ACTIVE
            },
            order: [
                ['updatedAt', 'DESC']
            ],
        });
    };

    SupportConversation.getByClient = function (clientId) {
        return SupportConversation.findOne({
            where: { clientSocketId: clientId, }
        });
    };

    SupportConversation.getByClientSocketId = function (clientSocketId) {
        return SupportConversation.findOne({
            where: { clientSocketId: clientSocketId }
        });
    };

    SupportConversation.assignAgent = async function (id, agentId, agentSocketId) {

        var updateResult = await SupportConversation.update({
            agentId: agentId,
            agentSocketId: agentSocketId,
            status: CONV_STATUS.ACTIVE
        }, { where: { id: id } });

        var affectedCount = updateResult[0];
        if (affectedCount === 1) { return updateResult[1]; } 
        else { throw new Error('unable to update running status of job'); }
    };

    SupportConversation.updateAgent = async function (id, agentId, agentSocketId) {
        var updateResult = await SupportConversation.update({
            agentId: agentId,
            agentSocketId: agentSocketId
        }, { where: { id: id }
        });

        return updateResult;
    };

    SupportConversation.getWaitingClientsCount = async function () {
        return SupportConversation.count({
            where: {
                status: CONV_STATUS.WAITING,
            }
        });
    };

    /*********************************************************************/

    SupportConversation.getWaitingClient = async function () {
        return SupportConversation.findOne({
            where: {
                status: CONV_STATUS.WAITING,
            },
            order: [["updatedAt", "ASC"]]
        });
    };
    SupportConversation.getWaitingClientsList = async function () {
        return SupportConversation.findAll({
            where: {
                status: CONV_STATUS.WAITING,
            },
            order: [["updatedAt", "ASC"]],
        });
    };

    SupportConversation.getConversationStatusByClientSocketId = async function (clientSocketId) {
        return SupportConversation.findOne({
            where: {
                clientSocketId: clientSocketId,
            }
        });
    };

    SupportConversation.getConversationByConversationId = async function (conversationId) {
        return SupportConversation.findOne({
            where: {
                id: conversationId,
            }
        });
    };
    /*********************************************************************/
    SupportConversation.markClientDisconnect = async function (clientSocketId) {
        return SupportConversation.update({
            status: CONV_STATUS.CLIENT_DISCONNECTED
        }, {
            where: {
                clientSocketId: clientSocketId,
                status: {
                    [Op.or]: [CONV_STATUS.WAITING, CONV_STATUS.ACTIVE]
                }
            },
            returning: true
        });
    };

    SupportConversation.markClientDisconnectById = async function (id) {
        return SupportConversation.update({
            status: CONV_STATUS.CLIENT_DISCONNECTED
        }, {
            where: {
                id: id,
                status: {
                    [Op.ne]: [CONV_STATUS.WAITING, CONV_STATUS.ACTIVE]
                }
            },
            returning: true
        });
    };

    SupportConversation.markAgentDisconnect = async function (agentSocketId) {
        return SupportConversation.update({
            status: CONV_STATUS.AGENT_DISCONNECTED
        }, {
            where: {
                agentSocketId: agentSocketId,
                status: {
                    [Op.or]: [CONV_STATUS.WAITING, CONV_STATUS.ACTIVE, CONV_STATUS.CLOSED]
                }
            },
            returning: true
        });
    };

    SupportConversation.markAgentDisposed = async function (agentSocketId, conversationId) {
        return SupportConversation.update({
            status: CONV_STATUS.AGENT_DISCONNECTED
        }, {
            where: {
                agentSocketId: agentSocketId,
                id: conversationId,
                status: {
                    [Op.or]: [CONV_STATUS.WAITING, CONV_STATUS.ACTIVE]
                }
            },
            returning: true
        });
    };

    SupportConversation.markAgentDisconnectByAgentId = async function (agentId) {
        return SupportConversation.update({
            status: CONV_STATUS.AGENT_DISCONNECTED
        }, {
            where: {
                agentId: agentId,
                status: {
                    [Op.or]: [CONV_STATUS.WAITING, CONV_STATUS.ACTIVE]
                }
            },
            returning: true
        });
    };

    SupportConversation.markDisposedByConversationId = async function (conversationId) {
        return SupportConversation.update({
            status: CONV_STATUS.CLOSED
        }, {
            where: {
                id: conversationId,
                status: CONV_STATUS.ACTIVE
            },
            returning: true
        });
    };



    return SupportConversation;
};
