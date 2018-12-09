const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("exams").insert(data);

exports.list = () => db("exams").select();

exports.retrieve = exam_id =>
  db("exams")
    .select()
    .where({ exam_id });

exports.update = (data, exam_id) =>
  db("exams")
    .update(data)
    .where({ exam_id });

exports.remove = exam_id =>
  db("exams")
    .update({ canceled: true })
    .where({ exam_id });
