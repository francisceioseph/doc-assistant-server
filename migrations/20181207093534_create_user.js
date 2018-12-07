
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("users", (table) => {
    table.increments("user_id");
    table.string("username");
    table.string("password");
    table.timestamp('user_created_at').defaultTo(knex.fn.now());

    table.unique('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user");
};
