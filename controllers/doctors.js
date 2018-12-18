import _ from 'lodash';
import Profile from "../models/profile";

exports.create = async (req, res) => {
  try {
    const { profile }      = req.body;
    const [profile_id]     = await Profile.create(profile);
    const [profile_record] = await Profile.retrieveByID(profile_id);

    res.json({
      profile: profile_record
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { id }  = req.params;
    const pacient = await Profile.retrieve(id);

    res.json(pacient);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
  try {
    const doctors    = await Profile.listByType({ profile_type_id: 5 });
    const doctorsMap = doctors.reduce(
      (acc, profile) => {
        const profileId = profile.user_profile_id;
        acc[profileId]  = profile;
        return acc;
      },
      {}
    );
    res.json(doctorsMap);
  } catch (error) {
    res.status(500).send(error);
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
    res.status(500).send(error);
  }
};

