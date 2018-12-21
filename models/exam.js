const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("exams").insert(data);

exports.list = () => 
  db("exams")
  .select(
    'exams.*',
    'exam_types.exam_type_name as exam_type_name',
    'pacients.full_name as pacient_name',
    'requesters.full_name as requester_name',
  )
  .join('exam_types', 'exams.exam_type_id', '=', 'exam_types.exam_type_id')
  .join('user_profiles AS pacients', 'exams.pacient_id', '=', 'pacients.user_profile_id')
  .join('user_profiles AS requesters', 'exams.requester_id', '=', 'requesters.user_profile_id')
  .reduce((acc, exam) => {
    const id = exam.exam_id;
    acc[id] = exam;
    return acc; 
  }, {});

exports.listTypes = () =>
  db('exam_types')
  .select('exam_type_id', 'exam_type_name')
  .reduce((acc, exam_type) => {
    const id = exam_type.exam_type_id;
    acc[id] = exam_type;
    return acc;
  }, {});
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
