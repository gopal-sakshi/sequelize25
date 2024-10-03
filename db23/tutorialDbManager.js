const dbSettings = require("../config/dbSettings");
const Sequelize = require("sequelize");

dbSettings.user, dbSettings.password, {
    query: { raw:true },        // only raw results given... we wont get DAO objects from now
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
}

const sequelize = new Sequelize("tutorials23", dbSettings.user, dbSettings.password, {
    query: { raw:true },        // only raw results given... we wont get DAO objects from now
    host: dbSettings.host,
    dialect: 'postgres',
    port: dbSettings.port,
    pool: dbSettings.pool,
    logging: dbSettings.logging
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial23/tutorial23.model")(sequelize, Sequelize);
module.exports = db;



db.tutorials = (sequelize, Sequelize) => {    
    // These columns will be generated automatically: id, title, description, published, createdAt, updatedAt.
const Tutorial23 = sequelize.define("tutorial44", {
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    published: { type: Sequelize.BOOLEAN }
}, {        
    timestamps: false,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    tableName: 'tutorial45'        
  });
return Tutorial23;
};