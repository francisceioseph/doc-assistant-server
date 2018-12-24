// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex('table_name').del()
//     .then(function () {
//       // Inserts seed entries
//       return knex('table_name').insert([
//         {id: 1, colName: 'rowValue1'},
//         {id: 2, colName: 'rowValue2'},
//         {id: 3, colName: 'rowValue3'}
//       ]);
//     });
// };

class Permission {
  constructor(resource, write, read, update, remove, list) {
    this.resource_name = resource;
    this.can_write = write;
    this.can_read = read;
    this.can_update = update;
    this.can_remove = remove;
    this.can_list = list;
  }
}

exports.seed = async (knex, Promise) => {
  await knex("permissions").del();
  await knex("user_roles").del();

  await knex("user_roles").insert([
    { user_role_id: 1, user_role_name: "Admin" },
    { user_role_id: 2, user_role_name: "Nurse" },
    { user_role_id: 3, user_role_name: "Regulator" },
    { user_role_id: 4, user_role_name: "Pharmacy" },
    { user_role_id: 5, user_role_name: "Doctor" },
    { user_role_id: 6, user_role_name: "Pacient" }
  ]);

  await knex("permissions").insert([
    {
      permission_id: 1,
      resource_name: "home",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 2,
      resource_name: "senhas",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 3,
      resource_name: "prontuario",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 4,
      resource_name: "documentos",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 5,
      resource_name: "evelocao",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 6,
      resource_name: "consultas",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 7,
      resource_name: "exames",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 8,
      resource_name: "cirurgias",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 9,
      resource_name: "cadastro-paciente",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 10,
      resource_name: "cadastro-medico",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 11,
      resource_name: "cadastro-tipo-cirurgia",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 12,
      resource_name: "cadastro-especialidade",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 13,
      resource_name: "cadastro-tipo-atendimento",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 14,
      resource_name: "cadastro-tipo-exame",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    },
    {
      permission_id: 15,
      resource_name: "profile",
      user_role_id: 1,
      can_write: true,
      can_list: true,
      can_read: true,
      can_remove: true,
      can_update: true
    }
  ]);
};
