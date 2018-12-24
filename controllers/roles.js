import * as Role from "../models/role";

export const create = async (req, res) => {
  try {
    const { role } = req.body;
    const roleDB = await Role.create(role);
    res.json(roleDB);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const edit = async (req, res) => {
  try {
    const { body: data } = req;
    const { role_id } = req.params;
    const role = await Role.update(data, role_id);

    res.json(role);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  try {
    const { role_id } = req.params;
    const role = await Role.remove(role_id);

    res.json(role);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const list = async (req, res) => {
  try {
    const roles = await Role.list();
    res.json(roles);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const retrieve = async (req, res) => {
  try {
    const { role_id } = req.params;
    const role = await Role.retrieve(role_id);
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};
