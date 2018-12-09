exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("surgeries", table => {
    table.increments("surgery_id");

    table
      .integer("surgery_type_id", 11)
      .unsigned()
      .references("surgery_type_id")
      .inTable("surgery_types");

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

    table
      .integer("requester_id", 11)
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
  return knex.schema.dropTableIfExists("surgeries");
};
