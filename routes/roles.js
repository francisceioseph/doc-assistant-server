import express from "express";
import { check } from "express-validator/check";

import * as RoleCtrl from "../controllers/roles";
import { validate } from "../utilities/validate";
import { jwtAuthenticator } from "../utilities/jwt-authenticator";

const router = express.Router();

const postRequiredFields = [
  check("role.user_role_name").exists(),
  check("role.permissions").isArray()
];

const updateRequiredFields = [check("user_role_name").isNumeric()];

router.get("/", jwtAuthenticator, RoleCtrl.list);
router.get("/:role_id", jwtAuthenticator, RoleCtrl.retrieve);

router.post(
  "/new",
  postRequiredFields,
  validate,
  jwtAuthenticator,
  RoleCtrl.create
);

router.patch(
  "/edit/:role_id",
  updateRequiredFields,
  validate,
  jwtAuthenticator,
  RoleCtrl.edit
);

module.exports = router;
