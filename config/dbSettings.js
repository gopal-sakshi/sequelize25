const path = require("path");
const jc23 = require('dotenv').config(
    { path: `.env.${process.env.NODE_ENV}` }
);
/*****************************************/
// console.log(jc23);
// console.log(jc23.parsed);
// console.log(process.env.PORT);
/*****************************************/
const dbSettings = {
    user: 'postgres',
    host: '127.0.0.1',
    port: process.env.PORT,
    password: process.env.password,
    pool: {
        max: 5,             // maximum number of connection in pool
        min: 0,             // minimum number of connection in pool
        acquire: 30000,     // max time that pool will try to get connection before throwing error
        idle: 10000         // max time a connection can be idle, before being released
    },
    logging: false
}

module.exports = dbSettings