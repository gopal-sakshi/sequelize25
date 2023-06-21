const auth23a = require("./auth23/index");

auth23a.sequelize.sync()
.then(() => console.log('synced db'))
.catch((err) => console.log('err'));
