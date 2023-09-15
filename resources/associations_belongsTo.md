# belongsTo


belongsTo ===> 1-1 relationship 
1 player "belongsTo" 1 club      // we ignore player can have multiple clubs for now
so, clubId33 attribute will be created on footballers12 table (see APPROACH 02, footballDbManager)

default name of foreignKey = target_model + target_primaryKey
- player belongsTo (club, id) ========> clubId        
    club is Model, id is its primaryKey
    clubId will be created on player model; and it will point to id of club Model 
- pilgrim belongsTo (user, aadhar) ====> userAadhar
    <userAadhar column> will be created on <pilgrim model>
    it will point to <aadhar column> of <user model>
- (company, uuid) ===> companyUuid
     
but we can override & specify the name of foreignKey
If alias is mentioned, it will used instead of target_model
    User.belongsTo(Company, {as: 'company23'});   company23Uuid (not companyUuid)
By default userAadhar column points to primaryKey on Company
targetKey = column on targetModel that foreignKey column on sourceModel points to
------------------------------------------------------------------------------------------

#explain23232

When information about association is present in source model we can use "belongsTo"
    you want footballers table to have "clubId" column referencing clubs table
    so, info is in footballers table 
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