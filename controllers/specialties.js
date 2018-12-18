import * as Specialty from "../models/specialty";

export const create = async (req, res) => {
  try {
    const [id] = await Specialty.create(req.body);
    const specialty = await Specialty.retrieve(id);
    res.json(specialty);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const list = async (req, res) => {
  try {
    const specialties = await Specialty.list();
    res.json(specialties);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const remove = async (req, res) => {
  try {
    const { specialty_id } = req.params;
    await Specialty.remove(specialty_id);
    res.json({ specialty_id });
  } catch (error) {
    res.status(500).send(error);
  }
};
