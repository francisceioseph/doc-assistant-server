
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('user_specialties', table => {
    table.increments('user_specialty_id');
    
    table
      .integer("specialty_id", 11)
      .unsigned()
      .references("specialty_id")
      .inTable("specialties");

    table
      .integer("user_id", 11)
      .unsigned()
      .references("user_id")
      .inTable("users");
    
    table
      .integer("user_profile_id", 11)
      .unsigned()
      .references("user_profile_id")
      .inTable("user_profiles");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('user_specialties');
};

