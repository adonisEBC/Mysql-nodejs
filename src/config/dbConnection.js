const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: ' ',
    user: 'adonis',
    password: ' ',
    database: 'spotify45'
  });
}
