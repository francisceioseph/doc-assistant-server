exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("user_profiles", table => {
    table.increments("user_profile_id");
    table.string("full_name");
    table.string("cpf");
    table.string("cns");
    table.string("mother_name");
    table.string("gender");
    table.date("date_of_birth");

    table.string("street_name");
    table.string("house_number");
    table.string("zipcode");
    table.string("neighborhood");
    table.string("city");
    table.string("state");

    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now());

    table
      .integer("user_id", 11)
      .unsigned()
      .references("user_id")
      .inTable("users");

    table
      .integer("profile_type_id", 11)
      .unsigned()
      .references("user_type_id")
      .inTable("user_types");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("user_profiles");
};
