const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  password: 'n4hu3l.R0j4s',
  host: 'localhost',
  port: '5432',
  database: "todoapp",
});
console.log(pool)

module.exports = pool;