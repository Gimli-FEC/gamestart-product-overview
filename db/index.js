const mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'fec_Module_1'
});

/* make sure you load the db schema file into mysql using this command from the db directory

mysql -u root < dbSchema.sql

*/
connection.connect((err) => {
  if (err) {
    console.log('Make sure you load the db script in mysql before you try to connect', err);
    return;
  }
  console.log('Successfully connected to the database!');
});


