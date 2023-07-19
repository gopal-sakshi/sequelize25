some commands

`.sequelizerc`

npx sequelize db:seed:all
npx sequelize db:seed:undo:all
---------------------------------------------

npx sequelize db:migrate
npx sequelize db:migrate:undo               // revert the most recent migration.
npx sequelize db:migrate:undo:all           // revert to initial state


