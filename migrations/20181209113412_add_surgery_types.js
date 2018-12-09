exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("surgery_types", table => {
    table.increments("surgery_type_id");
    table.string("surgery_type_name");
    table.text("surgery_type_description");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("surgery_types");
};
