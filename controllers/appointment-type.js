const AppointmentType = require("../models/appointment-type");

exports.create = async (req, res) => {
  try {
    const [id] = await AppointmentType.create(req.body);
    const record = await AppointmentType.retrieve(id);
    res.json(record);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { appointment_type_id } = req.params;
    const appointmentType = await AppointmentType.retrieve(appointment_type_id);
    res.json(appointmentType);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
  try {
    console.log("heloo")
    const appointmentTypes = await AppointmentType.list();
    res.json(appointmentTypes);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.edit = async (req, res) => {
  try {
    await AppointmentType.update(req.body, req.params.appointment_type_id);
    const appointment = await AppointmentType.retrieve(req.params.appointment_type_id);
    res.json(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { appointment_type_id } = req.params;
    await AppointmentType.remove(appointment_type_id);
    res.json({ removed: true, id: appointment_type_id });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};