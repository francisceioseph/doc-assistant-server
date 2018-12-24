exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("user_roles", t => {
    t.increments("user_role_id");

    t.string("user_role_name");
    t.string("user_role_description");

    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_roles");
};
