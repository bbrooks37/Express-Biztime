/** Database setup for BizTime. */
const { Pool } = require('pg');
require('dotenv').config();

const DB_URI = process.env.DATABASE_URL || "postgresql://localhost/biztime";

const pool = new Pool({
  connectionString: DB_URI
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end()
};


