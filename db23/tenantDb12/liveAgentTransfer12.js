// module.exports = function (sequelize, DataTypes) {
//     var LiveAgentTransfer = sequelize.define('LiveAgentTransfer', {
//         id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
//         conversationId: { type: DataTypes.UUID, allowNull: false },
//         clientId: { type: DataTypes.TEXT, allowNull: false },
//         transferredFromAgentId: { type: DataTypes.TEXT, allowNull: false },
//         transferredToAgentId: { type: DataTypes.TEXT, allowNull: true },
//         time: { type: DataTypes.DATE, allowNull: true }
//     }, { tableName: 'live_agent_transfer' } );

//     LiveAgentTransfer.insertAgentTransfer = function (conversationId, clientId, transferredFromAgentId, transferredToAgentId, time) {
//         return LiveAgentTransfer.create({
//             conversationId: conversationId,
//             clientId: clientId,
//             transferredFromAgentId: transferredFromAgentId,
//             transferredToAgentId: transferredToAgentId,
//             time: time
//         });
//     };

//     LiveAgentTransfer.updateAgent = function (agentEndTime, agentDuration, agentId, oldStatus) {
//         return LiveAgentTransfer.update({ endTime: agentEndTime, duration: agentDuration },
//         {
//             where: {
//                 userId: agentId,
//                 endTime: null,
//                 status: oldStatus
//             }
//         });
//     };

//     return LiveAgentTransfer;
// };
