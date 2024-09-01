const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_actual_username',
  password: 'your_actual_password',
  database: 'your_database_name'  // Ensure this matches the actual database name
});

module.exports = pool;
