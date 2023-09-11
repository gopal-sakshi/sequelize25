const Sequelize = require("sequelize");
const dbSettings = require("../config/dbSettings");
const cricket23DbInstance = new Sequelize('cricket23', dbSettings.user, dbSettings.password, {
    query: { raw:true },        // only raw results given... we wont get DAO objects from now
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
});

const cricket23Db = {};

cricket23Db.Sequelize = Sequelize;
cricket23Db.sequelize = cricket23DbInstance;

cricket23Db.teams23 = require("./cricket23/models/teams23")(cricket23DbInstance, Sequelize);
cricket23Db.ipl2018 = require("./cricket23/models/ipl2018")(cricket23DbInstance, Sequelize);
cricket23Db.player23 = require("./cricket23/models/player23")(cricket23DbInstance, Sequelize);
cricket23Db.currency23 = require("./cricket23/models/currency23")(cricket23DbInstance, Sequelize);
console.log('ssss ipl2018');
(async () => {
    console.log('force sycning ipl2018')
    await cricket23Db.ipl2018.sync({force:true});
})();
cricket23Db.ipl2018.hasMany(cricket23Db.teams23, {
    sourceKey: "team_id",
    foreignKey: "club"
});
cricket23Db.ipl2018.hasMany(cricket23Db.teams23);
cricket23Db.teams23.belongsTo(cricket23Db.ipl2018)
// (async () => {
//     let blah33 = await cricket23Db.ipl2018.logging23();
//     console.log(blah33);
// })()


module.exports = cricket23Db;