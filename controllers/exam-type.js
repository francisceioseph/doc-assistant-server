const ExamType = require("../models/exam-type");

exports.create = async (req, res) => {
  try {
    const [id] = await ExamType.create(req.body);
    const record = await ExamType.retrieve(id);
    res.json(record);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { exam_type_id } = req.params;
    const examType = await ExamType.retrieve(exam_type_id);
    res.json(examType);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.list = async (req, res) => {
  try {
    console.log("heloo")
    const examTypes = await ExamType.list();
    res.json(examTypes);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.edit = async (req, res) => {
  try {
    await ExamType.update(req.body, req.params.exam_type_id);
    const exam = await ExamType.retrieve(req.params.exam_type_id);
    res.json(exam);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { exam_type_id } = req.params;
    await ExamType.remove(exam_type_id);
    res.json({ removed: true, id: exam_type_id });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};