module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('currency23', {
            id: {
                type: Sequelize.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            name: { type: Sequelize.STRING },
            createdAt: { allowNull: false, type: Sequelize.DATE },
            updatedAt: { allowNull: false, type: Sequelize.DATE }
        });
    },
    down: queryInterface => queryInterface.dropTable('currency23')
};