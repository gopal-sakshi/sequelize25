Sync
- sync({ force:true })
    deletes all the tables & makes them from scratch

- sync({ force:false, alter:true })
    create new tables with the specified schema which are not present in database
    it wont reflect alterations in existing table schema


If you dont want existing tables (with data in them) to be wiped out
- sync({force: true}) is out of the question

--------------------------------------------------------------


use sequelize migrations in development & production
