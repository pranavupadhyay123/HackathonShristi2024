const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kavita@782435',
  database: 'testing'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as ID ' + connection.threadId);
});

// Example query
connection.query('SELECT * FROM register', (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results);
});

// Close the connection
connection.end();
