const DBConfig = {
    port: process.env.DBSERVER_PORT || 5432,
    host: process.env.DBSERVER_HOST || "localhost",
    database: process.env.DBSERVER_DB || "i3auras_staging_26-09-2022",
    user: process.env.DBSERVER_USER || "postgres",
    password: process.env.DBSERVER_PWS || "1234",
  };

  

  module.exports = { DBConfig };