const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");
// const cricket23DbInstance = new Sequelize('cricket23', dbSettings.user, dbSettings.password, {
//     host: dbSettings.host,
//     dialect: 'postgres',
//     port: dbSettings.port,
//     // pool: dbSettings.pool,
//     // logging: dbSettings.logging
// });
const cricket23DbInstance = new Sequelize('postgres://gop612:zBoSuAA9sQ3GSmEX1VanB405XOjwxf2x@dpg-cj0t7gc07spjv9rq0rkg-a.singapore-postgres.render.com/cricket23_s45z');

(async function() {
    try {
        await cricket23DbInstance.authenticate();
        console.log('conn establisheddd');
    } catch(err) {
        console.log('phattuuuuu');
        console.log(err);
    }
})();

const cricket23Db = {};

cricket23Db.Sequelize = Sequelize;
cricket23Db.sequelize = cricket23DbInstance;

cricket23Db.teams23 = require("./cricket23/models/teams23")(cricket23DbInstance, Sequelize);
cricket23Db.ipl2018 = require("./cricket23/models/ipl2018")(cricket23DbInstance, Sequelize);
cricket23Db.player23 = require("./cricket23/models/player23")(cricket23DbInstance, Sequelize);
cricket23Db.currency23 = require("./cricket23/models/currency23")(cricket23DbInstance, Sequelize);

module.exports = cricket23Db;