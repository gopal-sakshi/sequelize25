module.exports = {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('currency23', [
        {
            name: 'USD',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            name: 'EUR',
            createdAt: new Date(),
            updatedAt: new Date()
        },
    ], {}),
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('currency23', { 
            [Sequelize.Op.or]: [{ name: 'USD' }, { name: 'EUR' }] 
        });
    }
};