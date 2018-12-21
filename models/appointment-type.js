const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("appointment_types").insert(data);

exports.list = () =>
  db("appointment_types")
    .select()
    .reduce((acc, app) => {
      const id = app.appointment_type_id.toString();
      acc[id] = app;
      return acc;
    }, {});

exports.listTypes = () =>
  db("appointment_types")
    .select()
    .reduce((acc, appointmentType) => {
      const id = appointmentType.appointment_type_id;
      acc[id] = appointmentType;
      return acc;
    }, {});

exports.retrieve = appointment_type_id =>
  db("appointment_types")
    .select()
    .where({ appointment_type_id })
    .first();

exports.update = (data, appointment_type_id) =>
  db("appointment_types")
    .update(data)
    .where({ appointment_type_id });

exports.remove = appointment_type_id =>
  db("appointment_types")
    .del()
    .where({ appointment_type_id });
