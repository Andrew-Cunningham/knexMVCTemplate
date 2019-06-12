
exports.up = function (knex, Promise) {
    return knex.schema.createTable("comments", (table) => {
        table.increments();
        table.string("name");
        table.string("comment");
        table.integer("bookId").references('id').inTable('book');
        table.timestamps(true, true);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("comments")
};
