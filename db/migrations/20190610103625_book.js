
exports.up = function(knex, Promise) {
  return knex.schema.createTable("book", (table)=>{
      table.increments();
      table.string("title");
      table.string("imgUrl");
      table.string("description");
      table.string("author");
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("book")
};
