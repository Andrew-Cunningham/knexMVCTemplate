module.exports = {
  development: {
      client: 'pg',
      connection: {
        database: "users",
        host: "localhost"
      },
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
        },
        version: '7.2',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'postgres',
            database: 'book'
        }
    },
  production: {
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds/production',
        },
    },
};
