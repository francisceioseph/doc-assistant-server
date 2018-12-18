import express from "express";
import { check } from "express-validator/check";
import { validate } from "../utilities/validate";

import * as SpecialtyCtrl from "../controllers/specialties";
import { jwtAuthenticator } from "../utilities/jwt-authenticator";

const router = express.Router();

router.get("/", jwtAuthenticator, SpecialtyCtrl.list);
router.post(
  "/new",
  [check("specialty_name").exists()],
  validate,
  jwtAuthenticator,
  SpecialtyCtrl.create
);

router.delete('/:specialty_id', jwtAuthenticator, SpecialtyCtrl.remove);

export default router;
