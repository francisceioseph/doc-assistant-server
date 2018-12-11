const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

const create = data => db("user_profiles").insert(data);

const update = (user_id, data) =>
  db("user_profiles")
    .update(data)
    .where({ user_id });

const retrieve = user_id =>
  db("user_profiles")
    .select()
    .where({ user_id });

const list = () => db("user_profiles").select();

const remove = user_id =>
  db("user_profiles")
    .del()
    .where({ user_id });

module.exports = {
  create,
  update,
  retrieve,
  remove,
  list
};
