exports.up = function(knex, Promise) {
  return knex.schema
    .createTableIfNotExists("user_types", table => {
      table.increments("user_type_id");
      table.string("user_type_name");
      table.unique("user_type_name");
    })
    .then(() =>
      knex.schema.createTableIfNotExists("users", table => {
        table.increments("user_id");
        table.string("username");
        table.string("password");
        table
          .integer("user_type_id", 11)
          .unsigned()
          .references("user_type_id")
          .inTable("user_types");
        table.timestamp("user_created_at").defaultTo(knex.fn.now());

        table.unique("username");
      })
    );
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("user")
    .then(() => knex.schema.dropTableIfExists("user_types"));
};
