const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

const User    = require('../models/user');
const Profile = require('../models/profile');

const register = async (req, res) => {
  let userCreated = false;

  try {
    const { user, profile } = req.body;
    const [user_id] = await User.create(user);
    userCreated = true;

    const [profile_id]      = await Profile.create({ user_id, ...profile });
    const [user_record]     = await User.retrieve(user.username);
    const [profile_record]  = await Profile.retrieve(user_id);

    res.json({
      user: user_record,
      profile: profile_record
    });
  } catch (error) {
    if (userCreated) {
      const { user } = req.body;
      await User.remove(user.username);
    }

    res.status(500).json(error);
  }
};

const authenticate = async (req, res) => {
  try {
    const [user]    = await User.retrieveWithPassword(req.body.username);

    if (!user) {
      return res.status(422).json({ message: 'Incorrect username.' });
    }

    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(422).json({ message: 'Incorrect password.' });
    }

    const [profile] = await Profile.retrieve(user.user_id);
    const { password, ...rest } = user;
    const token    = jwt.sign(rest, process.env.JWT_SECRET, { expiresIn: 604800 });
    const response = {
      success: true,
      token: `JWT ${token}`,
      user: {
        ...rest,
        profile,
      },
    };

    return res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

const registerPacient = async(req, res) => {
  try {
    const { profile } = req.body;
    const [profile_id] = await Profile.create(profile);

    const [profile_record] = await Profile.retrieveByID(profile_id);

    res.json({
      profile: profile_record
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  register,
  registerPacient,
  authenticate,
};