// Pull in mysql so that data/table can be used/connected to.
var mysql = require("mysql");
// Create connection to mysql.
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sto37*kke",
    database: "burger_db"
  });
};

connection.connect();
module.exports = connection;
