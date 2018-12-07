module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: 'db/dev.sqlite3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename: 'db/test.sqlite3'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: 'db/prod.sqlite3'
    },
    useNullAsDefault: true
  }
};