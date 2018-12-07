const express   = require('express');
const passport  = require('passport');
const { check } = require('express-validator/check');

const UserCtrl     = require('../controllers/users');
const { validate } = require('../utilities/validate');

const router  = express.Router();

router.get('/', passport.authenticate('jwt',{session:false}), function(req, res, next) {
  res.send('respond with a resource');
});

router.post(
  '/register',
  [
    check('username').isEmail(),
    check('password').isLength({ min: 8 }).isAlphanumeric(),
  ],
  validate,
  UserCtrl.register);

router.post(
  '/login',
  [
    check('username').isEmail(),
    check('password').isLength({ min: 8 }).isAlphanumeric(),
  ],
  validate,
  UserCtrl.authenticate,
);

module.exports = router;
