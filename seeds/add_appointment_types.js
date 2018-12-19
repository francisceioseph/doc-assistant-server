
exports.seed = function(knex, Promise) {
  return knex('appointment_types').del()
    .then(function () {
      return knex('appointment_types').insert([
        {appointment_type_id: 1, appointment_type_name: 'Primeira Vez'},
        {appointment_type_id: 2, appointment_type_name: 'Retorno'},
        {appointment_type_id: 3, appointment_type_name: 'Emergência'}
      ]);
    });
};
