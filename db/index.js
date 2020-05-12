const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'fec_Module_1',
});

connection.connect((err) => {
  if (err) {
    console.log('Make sure you load the db script in mysql before you try to connect', err);
    return;
  }
  console.log('Successfully connected to the database!');
});


// returns all product overview information
const getProductInfoById = (id, cb) => {
  connection.query('SELECT * from products WHERE products.id=?', id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};
// returns all images for a given product id
const getImagesById = (id, cb) => {
  connection.query('SELECT id, url from images WHERE product_id=?', id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};
// returns esrb category ('everyon','teen','mature','adults-only', etc) and url to category image
const getEsrb = (id, cb) => {
  connection.query('SELECT name, url from esrbRatings INNER JOIN products WHERE esrbRatings.id=products.content_rating AND products.id=?', id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    cb(null, results);
  });
};

// returns reviews data for a given productId
const getReviews = (id, cb) => {
  connection.query('SELECT * FROM reviews WHERE product_id=?', id, (err, results) => {
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
module.exports.getReviews = getReviews;
module.exports.connection = connection;
