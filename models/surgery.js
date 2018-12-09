const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("surgeries").insert(data);

exports.list = () =>
  db("surgeries")
    .select()
    .where({ canceled: false });

exports.retrieve = surgery_id =>
  db("surgeries")
    .select()
    .where({ surgery_id });

exports.update = (data, surgery_id) =>
  db("surgeries")
    .update(data)
    .where({ surgery_id });

exports.remove = surgery_id =>
  db("surgeries")
    .update({ canceled: true })
    .where({ surgery_id });
