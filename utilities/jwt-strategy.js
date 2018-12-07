const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt  = require('passport-jwt').ExtractJwt;
const User = require('../models/user');

module.exports = passport => {
  const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: process.env.JWT_SECRET
  };

  passport.use(new JwtStrategy(options, async (jwt_payload, done) => {
    try {
      const user = await User.retrieveById(jwt_payload.user_id);

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    } catch (error) {
      return done(error, false);
    }
  }));
}