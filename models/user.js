const dbSettings = require("../knexfile")[process.env.ENVIRONMENT];
const db = require("knex")(dbSettings);
const bcrypt = require("bcrypt");

const create = data => {
  const password = bcrypt.hashSync(data.password, 10);
  const user = {
    ...data,
    password
  };

  return db("users").insert(user, ["user_id", "username", "user_created_at"]);
};

const retrieve = username => {
  return db("users")
    .select(["user_id", "username"])
    .where({ username });
};

const retrieveWithPassword = username => {
  return db("users")
    .select(["user_id", "username", "password"])
    .where({ username });
};

const lazyRetrieve = username =>
  db.transaction(async trx => {
    const user = await trx
      .select("user_id", "username", "user_role_id")
      .from("users")
      .where({ username })
      .first();

    const profile = await trx
      .select("user_profiles.*", "user_types.user_type_name as user_type_name")
      .from("user_profiles")
      .join(
        "user_types",
        "user_profiles.profile_type_id",
        "=",
        "user_types.user_type_id"
      )
      .where({ user_id: user.user_id })
      .first();

    const role = await trx
      .select()
      .from("user_roles")
      .where({ user_role_id: user.user_role_id })
      .first();

    const permissions = await trx
      .select()
      .from("permissions")
      .where({ user_role_id: user.user_role_id })
      .reduce((acc, p) => {
        acc[p.resource_name] = p;
        return acc;
      }, {});

    return {
      ...user,
      profile,
      role: {
        ...role,
        permissions
      }
    };
  });

const retrieveById = user_id => {
  return db("users")
    .select(["user_id", "username"])
    .where({ user_id });
};

const remove = username => {
  return db("users")
    .del(["user_id"])
    .where({ username });
};

module.exports = {
  create,
  retrieve,
  retrieveWithPassword,
  retrieveById,
  remove,
  lazyRetrieve
};
