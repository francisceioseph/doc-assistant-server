const express = require("express");
const { check } = require("express-validator/check");

const UserCtrl = require("../controllers/users");
const PacientRoutes = require('./pacients');
const { validate } = require("../utilities/validate");

const router = express.Router();

router.post(
  "/register",
  [
    check("user.username").isEmail(),
    check("user.password")
      .isLength({ min: 8 })
      .isAlphanumeric(),
    check("profile.profile_type_id").isNumeric()
  ],
  validate,
  UserCtrl.register
);

router.post(
  "/login",
  [
    check("username").isEmail(),
    check("password")
      .isLength({ min: 8 })
      .isAlphanumeric()
  ],
  validate,
  UserCtrl.authenticate
);

router.use('/pacients', PacientRoutes);
module.exports = router;
