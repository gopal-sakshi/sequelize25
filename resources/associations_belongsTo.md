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