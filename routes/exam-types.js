const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const ExamTypeCtrl = require("../controllers/exam-type");

const router = express.Router();

router.get("/", jwtAuthenticator, ExamTypeCtrl.list);

router.post(
  "/new",
  [ check("exam_type_name").exists() ],
  validate,
  jwtAuthenticator,
  ExamTypeCtrl.create
);

router.patch("/edit/:exam_type_id", jwtAuthenticator, ExamTypeCtrl.edit);

router.delete(
  "/remove/:exam_type_id",
  jwtAuthenticator,
  ExamTypeCtrl.remove
);

module.exports = router;
