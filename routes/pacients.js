const express = require("express");
const { check } = require("express-validator/check");

const PacientsCtrl = require("../controllers/pacients");

const { validate }         = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const router = express.Router();

const postRequiredFields = [
  check("profile.profile_type_id").isNumeric(),
  check("profile.cns").isNumeric(),
  check("profile.cpf").isNumeric(),
  check("profile.full_name").exists(),
  check("profile.mother_name").exists(),
  check("profile.gender").exists(),
  check("profile.date_of_birth").exists()
];

const updateRequiredFields = [check("user_profile_id").isNumeric()];

router.get("/", jwtAuthenticator, PacientsCtrl.list);
router.get("/:id", jwtAuthenticator, PacientsCtrl.retrieve);

router.post(
  "/new",
  postRequiredFields,
  validate,
  jwtAuthenticator,
  PacientsCtrl.create
);

router.patch(
  "/edit/:id",
  updateRequiredFields,
  validate,
  jwtAuthenticator,
  PacientsCtrl.edit
);

module.exports = router;
