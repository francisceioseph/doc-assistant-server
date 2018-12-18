const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const AppointmentCtrl = require("../controllers/appointment");

const router = express.Router();

router.get("/", jwtAuthenticator, AppointmentCtrl.list);

router.get("/types", jwtAuthenticator, AppointmentCtrl.listTypes);

router.get("/:appointment_id", jwtAuthenticator, AppointmentCtrl.retrieve);

router.post("/new", jwtAuthenticator, AppointmentCtrl.create);

router.patch("/edit/:appointment_id", jwtAuthenticator, AppointmentCtrl.edit);

router.delete(
  "/cancel/:appointment_id",
  jwtAuthenticator,
  AppointmentCtrl.remove
);

module.exports = router;
