const dbSettings  = require('../knexfile')[process.env.ENVIRONMENT];
const db          = require('knex')(dbSettings);
const profiles    = db('user_profiles');

const create   = (data) => profiles.insert(data);
const update   = (user_id, data) => profiles.update(data).where({ user_id });
const retrieve = (user_id) => profiles.select().where({ user_id });
const list     = () => profiles.select();
const remove   = (user_id) => profiles.del().where({ user_id });

module.exports = {
  create,
  update,
  retrieve,
  remove,
  list
};
