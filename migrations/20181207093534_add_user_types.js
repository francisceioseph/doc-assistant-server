
exports.up = function(knex, Promise) {
  return knex.schema
    .createTableIfNotExists("user_types", table => {
      table.increments("user_type_id");
      table.string("user_type_name");
      table.unique("user_type_name");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_types");
};
