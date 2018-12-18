import express    from 'express';
import { check }  from 'express-validator/check';

import DoctorCtrl           from '../controllers/doctors';
import { validate }         from '../utilities/validate';
import { jwtAuthenticator } from '../utilities/jwt-authenticator';

const router = express.Router();

const postRequiredFields = [
  check("profile.profile_type_id").isNumeric(),
  check("profile.full_name").exists(),
  check("profile.gender").exists(),
  check("profile.date_of_birth").exists()
];

const updateRequiredFields = [check("user_profile_id").isNumeric()];

router.get("/", jwtAuthenticator, DoctorCtrl.list);
router.get("/:id", jwtAuthenticator, DoctorCtrl.retrieve);

router.post(
  "/new",
  postRequiredFields,
  validate,
  jwtAuthenticator,
  DoctorCtrl.create
);

router.patch(
  "/edit/:id",
  updateRequiredFields,
  validate,
  jwtAuthenticator,
  DoctorCtrl.edit
);

module.exports = router;
