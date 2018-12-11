const express = require("express");
const { check } = require("express-validator/check");

const UserCtrl = require("../controllers/users");
const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const router = express.Router();

router.get("/", jwtAuthenticator, function(req, res, next) {
  res.status("respond with a resource");
});

router.post(
  "/register",
  [
    check("username").isEmail(),
    check("password")
      .isLength({ min: 8 })
      .isAlphanumeric(),
    check("profile_type_id").isNumeric()
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

module.exports = router;
