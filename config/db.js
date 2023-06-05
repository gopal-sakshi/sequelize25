const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('postgres://postgres:1258@127.0.0.1:5432/sequelize23');
module.exports = { sq: sequelize, clubName: 'REAL MADRID' };