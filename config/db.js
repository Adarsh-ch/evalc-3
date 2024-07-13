
const mysql = require("mysql2/promise");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  database: process.env.MYSQL_DB,
  password: process.env.MYSQL_PASSWORD,
  port: process.env.MYSQL_PORT,
  // connectTimeout:2147483647
  
});

// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     process.exit(1);
//   } else {
//     console.log('MySQL connected very beautifully...');
//   }
// });

module.exports = db;



