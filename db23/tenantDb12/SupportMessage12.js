const MESSAGE_TYPE = { CUSTOMER: 0, AGENT: 1 };
const DATA_TYPE = { TEXT: 0, IMAGE: 1, DOCUMENT: 2 };

module.exports = function (sequelize, DataTypes) {
    var SupportMessage = sequelize.define("SupportMessage", {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        type: { type: DataTypes.INTEGER, allowNull: false },
        text: DataTypes.TEXT,
        dataType: { type: DataTypes.INTEGER, allowNull: false },
        meta: DataTypes.JSONB
    }, { tableName: 'support_message' });

    SupportMessage.getById = function (id) {
        return SupportMessage.findOne({
            where: { id: id }
        });
    };

    SupportMessage.getByConversation = function (id, isAscending, limit) {
        return SupportMessage.findAll({
            where: { conversationId: id },
            order: [
                ['updatedAt', isAscending ? 'ASC' : 'DESC']
            ],
            limit: limit
        });
    };

    SupportMessage.getAllByConversation = function (id, isAscending) {
        return SupportMessage.findAll({
            where: { conversationId: id },
            order: [
                ['updatedAt', isAscending ? 'ASC' : 'DESC']
            ],
        });
    };

    SupportMessage.insertClientTextMessage = function (text, conversationId) {
        return SupportMessage.insert({
            type: MESSAGE_TYPE.CUSTOMER,
            dataType: DATA_TYPE.TEXT,
            text: text,
            conversationId: conversationId
        });
    };

    SupportMessage.insertAgentTextMessage = function (text, conversationId) {
        return SupportMessage.insert({
            type: MESSAGE_TYPE.AGENT,
            dataType: DATA_TYPE.TEXT,
            text: text,
            conversationId: conversationId
        });
    };

    return SupportMessage;
};
