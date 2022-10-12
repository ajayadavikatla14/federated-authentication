const { DBConfig } = require("./index");
const Pool = require("pg").Pool;


const pool = new Pool({
  user: DBConfig.user,
  host: DBConfig.host,
  database: DBConfig.database,
  password: DBConfig.password,
  port: DBConfig.port,
});

module.exports = pool;