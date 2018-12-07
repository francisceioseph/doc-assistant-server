const dbSettings  = require('../knexfile')[process.env.ENVIRONMENT];
const db          = require('knex')(dbSettings);
const telephones    = db('telephones');

const create   = (data) => telephones.insert(data);
const update   = (user_id, data) => telephones.update(data).where({ user_id });
const retrieve = (user_id) => telephones.select().where({ user_id });
const remove   = (user_id) => telephones.del().where({ user_id });

module.exports = {
  create,
  update,
  retrieve,
  remove,
};
