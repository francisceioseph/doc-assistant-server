const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

export const create = data => db("specialties").insert(data);

export const list = () =>
  db("specialties")
    .select()
    .reduce((acc, specialty) => {
      const id = specialty.specialty_id.toString();
      acc[id] = specialty;
      return acc;
    }, {});

export const retrieve = specialty_id =>
  db("specialties")
    .select()
    .where({ specialty_id })
    .first();

export const update = (specialty_id, data) =>
  db("specialties")
    .update(data)
    .where({ specialty_id });

export const remove = specialty_id =>
  db("specialties")
    .del()
    .where({ specialty_id });
