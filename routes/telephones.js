const { check } = require('express-validator/check');
const express = require('express');
const TelephoneCtrl = require('../controllers/telephones');

const ProfileCtrl     = require('../controllers/profiles');
const { validate } = require('../utilities/validate');
const { jwtAuthenticator } = require('../utilities/jwt-authenticator');

const router  = express.Router();

router.get('/:user_id', 
  jwtAuthenticator,
  TelephoneCtrl.list
);

router.post('/',
  [ check('telephone').isMobilePhone("any") ], 
  validate,
  jwtAuthenticator,
  TelephoneCtrl.create
);

router.patch('/:telephone_id',
  [ check('telephone').isMobilePhone("any") ], 
  validate,
  jwtAuthenticator,
  TelephoneCtrl.update
);

module.exports = router;