const faker = require('faker');

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


/*
randomNum: helper for random numbers for ratings/prices/stock-levels
*/

const randomNum = (min = 0, max = 0, precision = 0) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const random = Math.random() * (maximum - minimum + 1) + minimum;
  return random.toFixed(precision);
};

/*
genNewProduct: generates single record for the product table
*/
const genNewProduct = () => {
  const title = faker.commerce.productName();
  const publisher = faker.company.companyName();
  const contentRating = randomNum(1, 6);
  const userRating = randomNum(1, 4, 1);
  const priceNew = randomNum(50, 90, 2);
  const priceUsed = randomNum(20, 40, 2);
  const currentStockNew = randomNum(0, 3);
  const currentStockUsed = randomNum(0, 3);
  // eslint-disable-next-line max-len
  const params = [title, publisher, Number(contentRating), Number(userRating), Number(priceNew), Number(priceUsed), Number(currentStockNew), Number(currentStockUsed)];

  connection.query('INSERT INTO products (title, publisher, content_rating, userRating, priceNew, priceUsed, currentStockNew, currentStockUsed) VALUES (?,?,?,?,?,?,?,?)', params, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

/*
setUpProductTable: clears the product table and restarts auto_increment @ 0.
*/
const setUpProductTable = () => {
  connection.query('TRUNCATE TABLE products', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: products, AUTO_INCREMENT reset to 0');
  });
  let i = 0;
  while (i < 100) {
    genNewProduct();
    i += 1;
  }
  console.log('Products table has been reset and seeded.');
};

/*
setUpImagesTable: clears the product table and restarts auto_increment @ 0.

product photos base url: https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/[1-500].jpeg

*/

const setUpImagesTable = () => {
  const urls = [];
  const baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/';
  for (let i = 1; i <= 500; i += 1) {
    urls.push(`${baseUrl + i}.jpeg`);
  }

  connection.query('TRUNCATE TABLE images', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: images, AUTO_INCREMENT reset to 0');
  });

  for (let i = 1; i <= 100; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      const urlField = urls.pop();
      const params = [i, urlField];
      connection.query('INSERT INTO images (product_id, url) VALUES (?,?)', params, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  }
  console.log('Images table reset and seeded.');
};

/*
setUpESRBRatingsTable: clears the esrbRatings table and restarts auto_increment @ 0.
*/

const setUpESRBRatingsTable = () => {
  const urls = [];
  const baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/';
  for (let i = 1; i <= 7; i += 1) {
    urls.push(`${baseUrl + i}.jpeg`);
  }

  const ratingNames = ['early-childhood', 'everyone', 'everyone10+', 'teen', 'mature', 'adults-only', 'rating-pending'];

  connection.query('TRUNCATE TABLE esrbRatings', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: esrbRatings, AUTO_INCREMENT reset to 0');
  });

  for (let i = 0; i < 7; i += 1) {
    const params = [ratingNames[i], urls[i]];
    connection.query('INSERT INTO esrbRatings (name, url) VALUES (?,?)', params, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
  console.log('esrbRatings table reset and seeded.');
};


// call reset functions
setUpProductTable();
setUpImagesTable();
setUpESRBRatingsTable();
// end connection
connection.end();
