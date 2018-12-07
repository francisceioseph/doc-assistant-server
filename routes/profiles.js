const express = require('express');

const ProfileCtrl     = require('../controllers/profiles');
const { jwtAuthenticator } = require('../utilities/jwt-authenticator');

const router  = express.Router();

router.get('/', jwtAuthenticator, ProfileCtrl.list);
router.get('/:user_id', jwtAuthenticator, ProfileCtrl.retrieve);
router.patch('/:user_id', jwtAuthenticator, ProfileCtrl.update);

module.exports = router;
