module.exports = (sequelize, Sequelize, dbObject) => {
    const footballers12 = sequelize.define('footballers12', {
        name11: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        position23: Sequelize.STRING,
        // clubId123: {
        //     type: Sequelize.INTEGER,
        //     references: {
        //         model: dbObject.clubs12,
        //         key: 'id'
        //     }
        // } // creates reference to another table, without associations
    }, {
        tableName: 'footballers12', 
        underscored: true                   // instead of clubId, it'll be club_id 
    });
    return footballers12;
};