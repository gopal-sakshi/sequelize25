const { query } = require("express");

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.addColumn(
                'player23', // table name
                'attribute', // new field name
                {
                  type: Sequelize.DataTypes.STRING,
                  allowNull: true,
                },
            ),
            queryInterface.addColumn(
                'player23', // table name
                'age', // new field name
                {
                  type: Sequelize.DataTypes.INTEGER,
                  allowNull: true,
                },
            )
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.removeColumn('player23', 'attribute'),
            queryInterface.removeColumn('player23', 'age')
        ])
    }
};
