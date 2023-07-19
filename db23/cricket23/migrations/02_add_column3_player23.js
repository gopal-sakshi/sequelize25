const { query } = require("express");

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn('player23', 'isSouthPaw', {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            })
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('player23', 'isSouthPaw')
        ])
    }
};
