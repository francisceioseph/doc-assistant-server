const passport  = require('passport');
const jwtAuthenticator = passport.authenticate('jwt',{session:false});

module.exports = {
  jwtAuthenticator
};