const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

exports.create = data => db("exam_types").insert(data);

exports.list = () =>
  db("exam_types")
    .select()
    .reduce((acc, app) => {
      const id = app.exam_type_id.toString();
      acc[id] = app;
      return acc;
    }, {});

exports.retrieve = exam_type_id =>
  db("exam_types")
    .select()
    .where({ exam_type_id })
    .first();

exports.update = (data, exam_type_id) =>
  db("exam_types")
    .update(data)
    .where({ exam_type_id });

exports.remove = exam_type_id =>
  db("exam_types")
    .del()
    .where({ exam_type_id });
