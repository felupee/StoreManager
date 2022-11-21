const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: process.env.MYSQL_PORT || 3307,
  user: 'root',
  password: 'root',
  database: 'StoreManager',
});

module.exports = connection;