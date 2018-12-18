const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("appointments").insert(data);

exports.list = () =>
  db("appointments")
    .select()
    .where({ canceled: false });

exports.listTypes = () => 
  db("appointment_types")
    .select()
    .reduce(
      (acc, appointmentType) => {
        const id = appointmentType.appointment_type_id;
        acc[id] = appointmentType;
        return acc;
      }, 
      {});

exports.retrieve = appointment_id =>
  db("appointments")
    .select()
    .where({ appointment_id })
    .first();

exports.update = (data, appointment_id) =>
  db("appointments")
    .update(data)
    .where({ appointment_id });

exports.remove = appointment_id =>
  db("appointments")
    .update({ canceled: true })
    .where({ appointment_id });
