const Telephone = require("../models/telephone");

const create = async (req, res) => {
  try {
    const { body } = req;
    const result = await Telephone.create(body);

    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const list = async (req, res) => {
  try {
    const { user_id } = req.params;

    const telephones = await Telephone.list(user_id);
    res.json(telephones);
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res) => {
  try {
    const { body } = req;
    const { telephone_id } = req.params;

    await Telephone.update(telephone_id, body);
    const [telephone] = await Telephone.retrieve(telephone_id);
    res.json(telephone);
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res) => {
  try {
    const { telephone_id } = req.params;
    const result = await Telephone.remove(telephone_id);

    res.json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  create,
  list,
  update,
  remove
};
