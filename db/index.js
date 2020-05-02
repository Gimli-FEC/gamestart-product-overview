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


//will return all info whichever product id is entered
let getProductInfoById = (id, cb) => {
  connection.query('SELECT * from products WHERE products.id=?', id, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

let getImagesById = (id, cb) => {
  connection.query('SELECT url from images WHERE product_id=?', id, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

let getEsrb = (id, cb) => {
  connection.query('SELECT name, url from esrbRatings INNER JOIN products WHERE esrbRatings.id=products.content_rating AND products.id=?', id, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

module.exports.findProduct = getProductInfoById;
module.exports.getImages = getImagesById;
module.exports.getEsrb = getEsrb;