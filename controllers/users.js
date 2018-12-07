const jwt     = require('jsonwebtoken');
const bcrypt  = require('bcrypt');

const User    = require('../models/user');
const Profile = require('../models/profile');

const register = async (req, res) => {  
  const data = req.body;

  try {
    const user = await User.create(data);
    await Profile.create({ user_id: user[0] });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const authenticate = async (req, res) => {
  try {
    const [user] = await User.retrieveWithPassword(req.body.username);

    if (!user) {
      return res.status(422).json({ message: 'Incorrect username.' });
    }

    if(!bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(422).json({ message: 'Incorrect password.' });
    }

    const { password, ...plainUser } = user;
    const token    = jwt.sign(plainUser, process.env.JWT_SECRET, { expiresIn: 604800 });
    const response = {
      success: true,
      token: `JWT ${token}`,
      user: plainUser,
    };

    return res.json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  register,
  authenticate,
};