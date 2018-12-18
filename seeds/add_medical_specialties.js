
exports.seed = function(knex, Promise) {
  return knex('specialties').del()
    .then(function () {
      return knex('specialties').insert([
        {specialty_id: 1, specialty_name: 'Clinica Geral'},
        {specialty_id: 2, specialty_name: 'Cardiologia'},
        {specialty_id: 3, specialty_name: 'Obstetrícia'}
      ]);
    });
};
