exports.up = function(knex, Promise) {
    return knex.schema.createTable("author", (table)=>{
        table.increments();
        table.string("authorName");
        table.string("bio");
        table.timestamps(true, true);
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable("author")
  };