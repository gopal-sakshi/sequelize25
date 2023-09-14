belongsTo ===> foreign key for 1-1 relation exists on the <source> model.
hasOne ======> foreign key for 1-1 relation exists on the <target> model.


Person.hasOne(Person, {as: 'Father'})
// this will add the attribute FatherId to Person

Person.hasOne(Person, {as: 'Father', foreignKey: 'DadId'})
// this will add the attribute DadId to Person

