const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("appointments").insert(data);

exports.list = () =>
  db("appointments")
    .select()
    .where({ canceled: false });

exports.retrieve = appointment_id =>
  db("appointments")
    .select()
    .where({ appointment_id });

exports.update = (data, appointment_id) =>
  db("appointments")
    .update(data)
    .where({ appointment_id });

exports.remove = appointment_id =>
  db("appointments")
    .update({ canceled: true })
    .where({ appointment_id });
