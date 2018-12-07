const dbSettings  = require('../knexfile')[process.env.ENVIRONMENT];
const db          = require('knex')(dbSettings);
const bcrypt      = require('bcrypt');

const create = (data) => {
  const password = bcrypt.hashSync(data.password, 10);
  const user = {
    ...data,
    password
  };

  return db('users').insert(user, ['user_id', 'username', 'user_created_at']);
};

const retrieve = (username) => {
  return db('users').select(['user_id', 'username']).where({ username });
};

const retrieveWithPassword = (username) => {
  return db('users').select(['user_id', 'username', 'password']).where({ username });
};

const retrieveById = (user_id) => {
  return db('users').select(['user_id', 'username']).where({ user_id });
};

const remove = (username) => {
  return db('users').del(['user_id']).where({ username });
};

module.exports = {
  create,
  retrieve,
  retrieveWithPassword,
  retrieveById,
  remove
};
