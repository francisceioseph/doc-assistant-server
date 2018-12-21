const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const AppointmentCtrl = require("../controllers/appointment");

const router = express.Router();

router.get("/", jwtAuthenticator, AppointmentCtrl.list);

router.get("/:appointment_id", jwtAuthenticator, AppointmentCtrl.retrieve);

router.post(
  "/new",
  [
    check("pacient_id").isNumeric(),
    check("doctor_id").isNumeric(),
    check("appointment_type_id").isNumeric(),
    check("scheduled_to").exists()
  ],
  validate,
  jwtAuthenticator,
  AppointmentCtrl.create
);

router.patch("/edit/:appointment_id", jwtAuthenticator, AppointmentCtrl.edit);

router.delete(
  "/cancel/:appointment_id",
  jwtAuthenticator,
  AppointmentCtrl.remove
);

module.exports = router;
