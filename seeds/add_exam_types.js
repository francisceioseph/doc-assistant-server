
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exam_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('exam_types').insert([
        {exam_type_id: 1, exam_type_name: 'Hemograma'},
        {exam_type_id: 2, exam_type_name: 'Raio-X'},
        {exam_type_id: 3, exam_type_name: 'Tomografia'}
      ]);
    });
};
