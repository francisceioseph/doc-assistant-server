const Appointment = require("../models/appointment");

exports.create = async (req, res) => {
  try {
    const [appointment_id] = await Appointment.create(req.body);
    const appointment = await Appointment.retrieve(appointment_id);
    res.json(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const appointment = await Appointment.retrieve(appointment_id);
    res.json(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
  try {
    const appointments = await Appointment.list();
    res.json(appointments);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.edit = async (req, res) => {
  try {
    await Appointment.update(req.body, req.params.appointment_id);
    const appointment = await Appointment.retrieve(req.params.appointment_id);
    res.json(appointment);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const response = await Appointment.remove(appointment_id);
    res.json(response);
  } catch (error) {
    res.status(500).send(error);
  }
};