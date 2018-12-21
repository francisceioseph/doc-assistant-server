const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const AppointmentTypeCtrl = require("../controllers/appointment-type");

const router = express.Router();

router.get("/", jwtAuthenticator, AppointmentTypeCtrl.list);

router.post(
  "/new",
  [ check("appointment_type_name").exists() ],
  validate,
  jwtAuthenticator,
  AppointmentTypeCtrl.create
);

router.patch("/edit/:appointment_type_id", jwtAuthenticator, AppointmentTypeCtrl.edit);

router.delete(
  "/remove/:appointment_type_id",
  jwtAuthenticator,
  AppointmentTypeCtrl.remove
);

module.exports = router;
