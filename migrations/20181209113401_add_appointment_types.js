exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("appointment_types", table => {
    table.increments("appointment_type_id");
    table.string("appointment_type_name");
    table.text("appointment_type_description");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("appointment_types");
};
