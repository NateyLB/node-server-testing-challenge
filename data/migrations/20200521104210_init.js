
exports.up = function(knex) {
    return knex.schema
    .createTable("owners", tbl=>{
        tbl.increments();
        tbl.string("name").notNullable();
    })
    .createTable("dogs", tbl=>{
        tbl.increments();
        tbl.string("name").notNullable();
        tbl.string("breed").notNullable()
        tbl
        .integer("ownerID")
        .unsigned()
        .notNullable()
        .references("owners.id")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
    })
  
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("dogs")
  .dropTableIfExists("owners")
};
