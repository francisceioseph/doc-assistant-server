
exports.up = function(knex, Promise) {
  return knex.schema.table('user_profiles', table => {
    table.string('crm');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('user_profiles', table => {
    table.dropColumn('crm');
  })
};
