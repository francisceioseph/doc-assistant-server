const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

const permissions = () => db("permissions");

const reducer = (acc, permission) => {
  const { permission_id } = permission;
  acc[permission_id] = permission;
  return acc;
};

export const batchCreate = permissions =>
  db
    .batchInsert("permissions", permissions, permissions.length)
    .reduce(redurcer);

export const update = (permission, permission_id) =>
  permissions()
    .update(permission)
    .where({ permission_id });

export const remove = permission_id =>
  permissions()
    .del()
    .where({ permission_id });

export const retrieve = permission_id =>
  permissions()
    .select()
    .where({ permission_id })
    .first();

export const listAll = () =>
  permissions()
    .select()
    .reduce(reducer, {});

export const listByRole = user_role_id =>
  permissions()
    .select()
    .where({ user_role_id })
    .reduce(reducer, {});
