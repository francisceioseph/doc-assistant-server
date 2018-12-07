exports.seed = function(knex, Promise) {
  return knex("user_types")
    .del()
    .then(function() {
      return knex("user_types").insert([
        { user_type_id: 1, user_type_name: "Admin" },
        { user_type_id: 2, user_type_name: "Nurse" },
        { user_type_id: 3, user_type_name: "Regulator" },
        { user_type_id: 4, user_type_name: "Pharmacy" },
        { user_type_id: 5, user_type_name: "Doctor" },
      ]);
    });
};
