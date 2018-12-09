exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("appointments", table => {
    table.increments("appointment_id");

    table
      .integer("appointment_type_id", 11)
      .unsigned()
      .references("appointment_type_id")
      .inTable("appointment_types");

    table
      .integer("pacient_id", 11)
      .unsigned()
      .references("user_id")
      .inTable("users");

    table
      .integer("doctor_id", 11)
      .unsigned()
      .references("user_id")
      .inTable("users");

    table.boolean("canceled").defaultTo(false);

    table.timestamp("scheduled_to");
    table.timestamp("end_time");
    table.timestamp("canceled_at");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("appointments");
};
