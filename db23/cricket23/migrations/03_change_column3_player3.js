const { query } = require("express");

module.exports = {
    async up(queryInterface, Sequelize) {
        return Promise.all([
            queryInterface.changeColumn('player23', 'isSouthPaw', {
                type: Sequelize.DataTypes.STRING,
                allowNull: true,
                defaultValue: "false"
            })
        ]);
    },

    async down(queryInterface, Sequelize) {
        return Promise.all([

            // THIS WILL FAIL ====> cant cast automatically to boolean... so, drop column, add again
            // queryInterface.changeColumn('player23', 'isSouthPaw', {
            //     type: Sequelize.DataTypes.BOOLEAN,
            //     allowNull: true,
            //     defaultValue: false
            // })

            queryInterface.removeColumn('player23', 'isSouthPaw'),
            queryInterface.addColumn('player23', 'isSouthPaw', {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: true,
                defaultValue: false
            })
        ]);
    }
};
