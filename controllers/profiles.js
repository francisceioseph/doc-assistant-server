const Profile = require('../models/profile');

async function list (req, res) {
  try {
    const profiles = await Profile.list();
    res.json(profiles);
  } catch (error) {
    res.status(500).send(error);
  }
};

async function retrieve(req, res) {
  try {
    const { user_id } = req.params;
    const [ profile ] = await Profile.retrieve(user_id);

    if (!profile) {
      res.status(404).json({ msg: 'entity not found '});
    }

    res.json(profile);
  } catch (error) {
    res.status(500).send(error);
  }
};

async function update(req, res) {
  try {
    const { body: profile } = req;
    const { user_id } = req.params;

    await Profile.update(user_id, profile);
    const [ updates ] = Profile.retrieve(user_id);

    res.json(updates);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  list,
  retrieve,
  update,
};