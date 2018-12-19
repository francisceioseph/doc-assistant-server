const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);
const moment = require("moment");

exports.create = data => db("appointments").insert(data);

exports.list = () =>
  db("appointments")
    .select(
      "appointments.*",
      "user_profiles.full_name",
      "doctors.full_name AS doctor_name",
      "appointment_types.appointment_type_name"
    )
    .join(
      "user_profiles",
      "appointments.pacient_id",
      "=",
      "user_profiles.user_profile_id"
    )
    .join(
      "user_profiles AS doctors",
      "appointments.doctor_id",
      "=",
      "doctors.user_profile_id"
    )
    .join(
      "appointment_types",
      "appointments.appointment_type_id",
      "=",
      "appointment_types.appointment_type_id"
    )
    .whereBetween("scheduled_to", [
      moment()
        .startOf("month")
        .toISOString(),
      moment()
        .endOf("month")
        .toISOString()
    ])
    .reduce((acc, app) => {
      const id = app.appointment_id;
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
