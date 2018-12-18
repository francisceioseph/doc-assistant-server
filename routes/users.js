import express from "express";
import { check } from "express-validator/check";

import UserCtrl      from "../controllers/users";
import PacientRoutes from './pacients';
import DoctorRoutes  from './doctors';

import { validate } from "../utilities/validate";

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
router.use('/doctors', DoctorRoutes);
module.exports = router;
