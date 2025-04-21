const mysql = require('mysql2');

let connection;
const createConnection = () => {
  if (connection) {
    return connection;
  }
  connection = mysql.createConnection({
    host: SQL_DB_HOST,  
    user: SQL_DB_USER,  
    password: SQL_DB_PWD, 
    database: SQL_DB_NAME 
  });
  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
    console.log('Connected to the MySQL server.');
  });

  return connection;
};

module.exports = { createConnection };

