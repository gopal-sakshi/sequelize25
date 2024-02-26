# belongsTo


belongsTo ===> 1-1 relationship 
1 player "belongsTo" 1 club      // we ignore player can have multiple clubs for now
so, clubId33 attribute will be created on footballers12 table (see APPROACH 02, footballDbManager)

default name of foreignKey = target_model + target_primaryKey
- player belongsTo (club, id) ========> clubId        
    club is Model, id is its primaryKey
    clubId will be created on player model; and it will point to id of club Model 
- pilgrim belongsTo (userTable, aadharColumn) ====> userAadhar
    <userAadhar column> will be created on <pilgrim model>
    it will point to <aadhar column> of <user model>
- (company, uuid) ===> companyUuid
     
but we can override & specify the name of foreignKey
If alias is mentioned, it will used instead of target_model
    User.belongsTo(Company, {as: 'company23'});   company23Uuid (not companyUuid)
By default userAadhar column points to primaryKey on Company
targetKey = column on targetModel that foreignKey column on sourceModel points to
------------------------------------------------------------------------------------------


A.hasOne(B, { });
A.belongsTo(B, { });
A.hasMany(B, { });
A.belongsToMany(B, { through: 'C', { } });

in all examples above =====> A is source model; B is target model
------------------------------------------------------------------------------------------
#explain23232
there are two things -- sourceModel & targetModel
When info23 about association is present in source model we can use "belongsTo"
    you want <footballers table> to have `clubId column` referencing <clubs table>
    association is <clubId column> which will be present on <footballers table>
    so, info23 is in <footballers table>
    if (fb table = sourceModel, club table = targetModel) --> belongsTo
        footballers12.belongsTo(clubs12) ----> "clubId" will be on footballers12
    if (fb table = targetModel, club table = sourceModel) --> hasOne
        clubs12.hasOne(footballers12) -----> "clubId" will be on footballers12

When information about association is present in target model we can use "hasOne"
    
you want clubs table to have "captainId" column referencing footballers table
    so, info is in clubs table
    clubs12.belongsTo(footballers12) // OR
    footballers12.hasOne(clubs12);
------------------------------------------------------------------------------------------

belongsTo (or) hasOne
- it simply does ONE and ONLY ONE thing
- it creates a new Column on a table
- in postgres terms, no ORM nothing...
    its like we have two tables (table11 & table12)
    we will create a new column on table11
    add a foreign key constraint on that newly created colum referencing someColumn in table12
    
------------------------------------------------------------------------------------------