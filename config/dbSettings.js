console.log(process.env.USER);
console.log(process.env.HOST);
console.log(process.env.PORT);
console.log(process.env.password);
const dbSettings = {
    user: process.env.USER,
    host: process.env.HOST,
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