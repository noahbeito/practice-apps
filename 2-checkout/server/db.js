const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  // password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});


const db = Promise.promisifyAll(connection, { multiArgs: true });


db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (\
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,\
        session_id INT NOT NULL UNIQUE,\
        username VARCHAR(255) NOT NULL,\
        email VARCHAR(255) NOT NULL,\
        user_password VARCHAR(255) NOT NULL,\
        ship_address_line_1 VARCHAR(255) NOT NULL,\
        ship_address_line_2 VARCHAR(255),\
        ship_city VARCHAR(255) NOT NULL,\
        ship_state VARCHAR(255) NOT NULL,\
        ship_zip INT NOT NULL,\
        phone_number VARCHAR(255) NOT NULL,\
        cc_number INT NOT NULL,\
        cc_expire_date VARCHAR(255) NOT NULL,\
        cvv INT NOT NULL,\
        billing_zip INT NOT NULL\
      );"
    )
  )
  .catch((err) => console.log('THIS ERROR???', err));

module.exports = db;
