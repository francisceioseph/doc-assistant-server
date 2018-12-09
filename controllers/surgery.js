const Surgery = require("../models/surgery");

exports.create = async (req, res) => {
  try {
    const { body: data } = req;
    const [surgery_id] = await Surgery.create(data);
    const surgery = await Surgery.retrieve(surgery_id);

    res.json(surgery);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { surgery_id } = req.params;
    const surgery = Surgery.retrieve(surgery_id);

    res.json(surgery);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.list = async (req, res) => {
  try {
    const surgeries = Surgery.list();
    res.json(surgeries);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { surgery_id } = req.params;
    const { body: data } = req;

    await Surgery.update(data, surgery_id);

    const surgery = Surgery.retrieve(surgery_id);
    res.json(surgery);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { surgery_id } = req.params;
    const result = Surgery.remove(surgery_id);
    res.json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
