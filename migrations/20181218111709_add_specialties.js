
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('specialties', table => {
    table.increments('specialty_id');
    table.string("specialty_name");
    table.string("specialty_description");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('specialties');
};
