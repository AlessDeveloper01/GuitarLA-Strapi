module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cfope2o2i3mo4bulvm3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_q58m'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'zsPEagAPzoCtPI7EXi9XdNVK3rIw3T59'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
