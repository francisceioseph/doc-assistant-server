exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("permission", t => {
    t.increments("permission_id");

    t.string("resource_name");
    t.boolean("can_write").defaultTo(false);
    t.boolean("can_read").defaultTo(false);
    t.boolean("can_update").defaultTo(false);
    t.boolean("can_remove").defaultTo(false);
    t.boolean("can_list").defaultTo(false);

    t.integer("user_role_id", 11)
      .unsigned()
      .references("user_role_id")
      .inTable("user_roles");

    t.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("permission");
};
