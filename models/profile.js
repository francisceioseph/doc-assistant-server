const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

const create = data => db("profiles").insert(data);

const update = (user_id, data) =>
  db("profiles")
    .update(data)
    .where({ user_id });

const retrieve = user_id =>
  db("profiles")
    .select()
    .where({ user_id });

const list = () => db("profiles").select();

const remove = user_id =>
  db("profiles")
    .del()
    .where({ user_id });

module.exports = {
  create,
  update,
  retrieve,
  remove,
  list
};
