exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("exam_types", table => {
    table.increments("exam_type_id");
    table.string("exam_type_name");
    table.text("exam_type_description");

    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("exam_types");
};
