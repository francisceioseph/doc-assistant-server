const { check } = require("express-validator/check");
const express = require("express");

const { validate } = require("../utilities/validate");
const { jwtAuthenticator } = require("../utilities/jwt-authenticator");

const ExamCtrl = require("../controllers/exam");

const router = express.Router();

router.get("/", jwtAuthenticator, ExamCtrl.list);

router.get("/:exam_id", jwtAuthenticator, ExamCtrl.retrieve);

router.post("/new", jwtAuthenticator, ExamCtrl.create);

router.patch("/edit/:exam_id", jwtAuthenticator, ExamCtrl.edit);

router.delete("/cancel/:exam_id", jwtAuthenticator, ExamCtrl.remove);

module.exports = router;
