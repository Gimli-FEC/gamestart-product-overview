var faker = require('faker');
const mysql = require('mysql');
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'fec_Module_1'
});

connection.connect((err) => {
  if (err) {
    console.log('Make sure you load the db script in mysql before you try to connect', err);
    return;
  }
  console.log('Successfully connected to the database!');
});


//////////////////////////////////
//    randomNum: helper function for generating random numbers with and without decimals for ratings/prices/stock-levels
//////////////////////////////////
var randomNum = (min = 0, max = 0, precision = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.random() * (max - min + 1) + min;
  return random.toFixed(precision);
};

////////////////////////////////////////
//    genNewProduct: generates single record for the product table
////////////////////////////////////////
var genNewProduct = () => {
  var title = faker.commerce.productName();
  var publisher = faker.company.companyName();
  var contentRating = randomNum(1, 6); //random num from 1-7
  var userRating = randomNum(1, 4, 1); //random num from 0-5
  var priceNew = randomNum(50, 90, 2); //random num from 50-100
  var priceUsed = randomNum(20, 40, 2); //random num from 5-35
  var currentStockNew = randomNum(0, 3); //random (0 should show up so i can test front-end behavior)
  var currentStockUsed = randomNum(0, 3); //random (0 should show up so i can test front-end behavior)

  var params = [title, publisher, Number(contentRating), Number(userRating), Number(priceNew), Number(priceUsed), Number(currentStockNew), Number(currentStockUsed)];

  connection.query('INSERT INTO products (title, publisher, content_rating, userRating, priceNew, priceUsed, currentStockNew, currentStockUsed) VALUES (?,?,?,?,?,?,?,?)', params, (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
  });
};

////////////////////////////////////////
//    setUpProductTable: clears the product table and restarts auto_increment @ 0.
////////////////////////////////////////

var setUpProductTable = function() {
  connection.query('TRUNCATE TABLE products', (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: products, AUTO_INCREMENT reset to 0');
  });
  var i = 0;
  while (i < 100) {
    genNewProduct();
    i++;
  }
  console.log('Products table has been reset and seeded.');
};

////////////////////////////////////////
//    setUpImagesTable: clears the product table and restarts auto_increment @ 0.
////////////////////////////////////////
//product photos url: https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/[1-500].jpeg
//var prodPhotosBase = `https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/${num}.jpeg`; //[1-500].jpeg
var setUpImagesTable = function () {
  var urls = [];
  var baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/';
  for (var i = 1; i <= 500; i++) {
    urls.push(baseUrl + `${i}.jpeg`);
  }

  connection.query('TRUNCATE TABLE images', (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: images, AUTO_INCREMENT reset to 0');
  });
  var i = 0;
  for (var i = 1; i <= 100; i++) {
    for (var j = 1; j <= 5; j++) {
      urlField = urls.pop();
      params = [i, urlField];
      connection.query('INSERT INTO images (product_id, url) VALUES (?,?)', params, (err, results, fields) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
  console.log('Images table reset and seeded.');
};

////////////////////////////////////////
//    setUpESRBRatingsTable: clears the esrbRatings table and restarts auto_increment @ 0.
////////////////////////////////////////
//product photos url: https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/[1-500].jpeg
//var prodPhotosBase = `https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/${num}.jpeg`; //[1-500].jpeg
var setUpESRBRatingsTable = function () {
  var urls = [];
  var baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/';
  for (var i = 1; i <= 7; i++) {
    urls.push(baseUrl + `${i}.jpeg`);
  }

  var ratingNames = ['early-childhood', 'everyone', 'everyone10+', 'teen', 'mature', 'adults-only', 'rating-pending'];

  connection.query('TRUNCATE TABLE esrbRatings', (err, results, fields) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: esrbRatings, AUTO_INCREMENT reset to 0');
  });

  for (var i = 0; i < 7; i++) {
    params = [ratingNames[i], urls[i]];
    connection.query('INSERT INTO esrbRatings (name, url) VALUES (?,?)', params, (err, results, fields) => {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log('esrbRatings table reset and seeded.');
};


//call reset functions
setUpProductTable();
setUpImagesTable();
setUpESRBRatingsTable();

//end connection
connection.end();