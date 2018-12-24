exports.up = function(knex, Promise) {
  return knex.schema.table("users", t => {
    t.integer("user_role_id", 11)
      .unsigned()
      .references("user_role_id")
      .inTable("user_roles");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("users", t => {
    t.dropColumn("user_role_id");
  });
};
