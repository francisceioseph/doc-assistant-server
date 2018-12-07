const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const register = async (req, res) => {  
  const data = req.body;

  try {
    const user = await User.create(data);
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

    if(bcrypt.compareSync(req.body.password, user.password)) {
      return res.status(422).json({ message: 'Incorrect password.' });
    }

    const token    = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: 604800 });
    const response = {
      success: true,
      token: `JWT ${token}`,
      user: {
        user_id  : user.user_id,
        username : user.username,
      }
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