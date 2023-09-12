clubs12 ---> footballers12 (1-N relationship)
one club has many footballers belonging to that club
footballers must belong to only one club
hence we use `belongsTo` (or) `hasMany`
using either of them ----> creates <clubs12Id on footballers12 Model>
if we use underscored, it creates <clubs12Id on footballers12 Model; but fieldName is `clubs12_id`>

clubs12_id ====> foreign key on footballers12 Model
if club is deleted (or) updated from clubs12 table
- onUpdate onDelete ====> RESTRICT, CASCADE, NO ACTION, SET DEFAULT, SET NULL
<!-- --------------------------------------------------------------------------- -->

A document can have multiple versions, 
and for convenience, a document has a reference to its current version.

Document table = 3 rows
    hr_doc -----> id, author, pages, srcUrl, current_version (hr_doc_2013)
    posh_doc ---> ......... ....... ......, current_version (posh_doc_2014)
    insurance_doc
version table = 7 rows
    hr_doc_2013
    hr_doc_2014
    hr_doc_2015
    posh_doc_2013
    posh_doc_2014
    insu_doc_2018
    insu_doc_2019

`current_version` column in `Document` table points to some row in `Version` table 

Document.hasMany(Version);          <!-- This adds documentId attribute to version --> 
Document.belongsTo(Version, {
    as: 'Current',
    foreignKey: 'currentVersionId',
    constraints: false          <disabling this throws cyclic dependency error>
});                         <!-- This adds currentVersionId attribute to document --> 

the code above will result in the following error: Cyclic dependency found.
<!-- --------------------------------------------------------------------------- -->

