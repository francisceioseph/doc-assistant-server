const dbSettings  = require('../knexfile')[process.env.ENVIRONMENT];
const db          = require('knex')(dbSettings);

const create   = (data) => db('telephones').insert(data);
const retrieve = (telephone_id) => db('telephones').select().where({ telephone_id });
const list     = (user_id) => db('telephones').select().where({ user_id });
const update   = (telephone_id, data) => db('telephones').update(data).where({ telephone_id });
const remove   = (telephone_id) => db('telephones').del().where({ telephone_id });

module.exports = {
  create,
  retrieve,
  update,
  remove,
  list
};
