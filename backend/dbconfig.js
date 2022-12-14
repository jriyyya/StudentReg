const { Pool } = require("pg");

require("dotenv").config({ path: __dirname + "/.env" });

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: connectionString,
//   ssl: {
//     rejectUnauthorized: false,
//   },
});

module.exports = { pool };
