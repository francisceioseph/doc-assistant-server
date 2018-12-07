exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("telephones", table => {
    table.increments("telephone_id");
    table.string("telephone");
    table
      .integer("user_id", 11)
      .unsigned()
      .references("user_id")
      .inTable("users");

    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTableIfExists("telephones");
};
