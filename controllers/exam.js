const Exam = require("../models/exam");

exports.create = async (req, res) => {
  try {
    const { body: data } = req;
    const [exam_id] = await Exam.create(data);
    const exam = await Exam.retrieve(exam_id);
    res.json(exam);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.retrieve = async (req, res) => {
  try {
    const { exam_id } = req.params;
    const exam = await Exam.retrieve(exam_id);
    res.json(exam);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.list = async (req, res) => {
  try {
    const exams = await Exam.list();
    res.json(exams);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.edit = async (req, res) => {
  try {
    const { body: data, params } = req;
    const { exam_id } = params;

    await Exam.update(data, exam_id);

    const exam = Exam.retrieve(exam_id);
    res.json(exam);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.remove = async (req, res) => {
  try {
    const { exam_id } = req.params;
    const result = Exam.remove(exam_id);
  } catch (error) {
    res.status(500).json(error);
  }
};
