const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const SurgeryCtrl = require("../controllers/surgery");

const router = express.Router();

router.get("/", jwtAuthenticator, SurgeryCtrl.list);

router.get("/:surgery_id", jwtAuthenticator, SurgeryCtrl.retrieve);

router.post("/new", jwtAuthenticator, SurgeryCtrl.create);

router.patch("/edit/:surgery_id", jwtAuthenticator, SurgeryCtrl.edit);

router.delete(
  "/cancel/:surgery_id",
  jwtAuthenticator,
  SurgeryCtrl.remove
);

module.exports = router;
