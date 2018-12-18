const Profile = require("../models/profile");

exports.create = async (req, res) => {
  try {
    const { profile }      = req.body;
    const [profile_id]     = await Profile.create(profile);
    const [profile_record] = await Profile.retrieveByID(profile_id);

    res.json({
      profile: profile_record
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { id }  = req.params;
    const pacient = await Profile.retrieve(id);

    res.json(pacient);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.list = async (req, res) => {
  try {
    const pacients = await Profile.listByType({ profile_type_id: 5 })
    res.json(pacients);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { body: data } = req;

    await Profile.update(data, id);

    const surgery = await Profile.retrieve(id);
    res.json(surgery);
  } catch (error) {
    res.status(500).json(error);
  }
};

