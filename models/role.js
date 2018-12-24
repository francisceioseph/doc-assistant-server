const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);

const Permission = require("./permission");

const roles = () => db("user_roles");
const reducer = (acc, role) => {
  const { user_role_id } = role;
  acc[user_role_id] = role;
  return acc;
};

function create(data) {
  return db.transaction(async trx => {
    const { permissions, ...role } = data;

    const [user_role_id] = await trx.insert(role).into("user_roles");

    const rolePermissions = permissions.map(permission => ({
      user_role_id,
      ...permission
    }));

    await trx
      .batchInsert("permissions", rolePermissions, rolePermissions.length)
      .reduce((acc, p) => {
        acc[p.permission_id] = p;
        return acc;
      }, {});

    const roleDB = await trx
      .select()
      .from("user_roles")
      .where({ user_role_id })
      .first();

    const permissionsDB = await trx
      .select()
      .from("permissions")
      .where({ user_role_id });

    return {
      ...roleDB,
      permissions: permissionsDB
    };
  });
}

function update(role, user_role_id) {
  return roles()
    .update(role)
    .where({ user_role_id });
}

async function retrieve(user_role_id) {
  const role = await roles()
    .select()
    .where({ user_role_id })
    .first();

  const permissions = await Permission.listByRole(user_role_id);

  return {
    ...role,
    permissions
  };
}

function list() {
  return roles()
    .select()
    .reduce(reducer, {});
}

module.exports = {
  create,
  update,
  retrieve,
  list
};
