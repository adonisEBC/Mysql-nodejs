const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '23.100.125.19',
    user: 'adonis',
    password: 'androide064',
    database: 'spotify45'
  });
}
