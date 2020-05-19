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
  const priceNew = randomNum(50, 90, 2);
  const priceUsed = randomNum(20, 40, 2);
  const currentStockNew = randomNum(0, 3);
  const currentStockUsed = randomNum(0, 3);
  // eslint-disable-next-line max-len
  const params = [title, publisher, Number(contentRating), Number(priceNew), Number(priceUsed), Number(currentStockNew), Number(currentStockUsed)];

  connection.query('INSERT INTO products (title, publisher, content_rating, priceNew, priceUsed, currentStockNew, currentStockUsed) VALUES (?,?,?,?,?,?,?)', params, (err) => {
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
genNewReview: generates single record for the reviews table
for each productId passed in from setUpReviewsTable
*/
const genNewReview = (prodId) => {
  const stars1 = Number(randomNum(0, 500, 0));
  const stars2 = Number(randomNum(0, 500, 0));
  const stars3 = Number(randomNum(0, 500, 0));
  const stars4 = Number(randomNum(0, 500, 0));
  const stars5 = Number(randomNum(0, 500, 0));
  const totalRatings = stars5 + stars4 + stars3 + stars2 + stars1;
  let avgRating = ((stars5 * 5) + (stars4 * 4) + (stars3 * 3) + (stars2 * 2) + (stars1)) / totalRatings;
  avgRating = avgRating.toFixed(1);
  // eslint-disable-next-line max-len
  const params = [prodId, Number(avgRating), totalRatings, stars1, stars2, stars3, stars4, stars5];

  connection.query('INSERT INTO reviews (product_id, overallRating, totalReviews, stars1, stars2, stars3, stars4, stars5) VALUES (?,?,?,?,?,?,?,?)', params, (err) => {
    if (err) {
      console.log(err);
    }
  });
};


/*
setUpReviewsTable: clears the reviews table and restarts auto_increment @ 0.
*/

const setUpReviewsTable = () => {
  connection.query('TRUNCATE TABLE reviews', (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log('Records deleted in table: reviews, AUTO_INCREMENT reset to 0');
  });
  let i = 1;
  while (i <= 100) {
    genNewReview(i);
    i += 1;
  }
  console.log('Reviews table has been reset and seeded.');
};


/*
setUpImagesTable: clears the product table and restarts auto_increment @ 0.

product photos base url: https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/[1-500].jpeg

*/

const setUpImagesTable = () => {
  const urls = [];
  //const baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/product/';
  const baseUrl = 'http://d1i5z9gkmthkca.cloudfront.net/photos/product/';
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
  //const baseUrl = 'https://hrr45-fec.s3.us-east-2.amazonaws.com/photos/esrb/';
  const baseUrl = 'http://d1i5z9gkmthkca.cloudfront.net/photos/esrb/';
  for (let i = 1; i <= 7; i += 1) {
    urls.push(`${baseUrl + i}.png`);
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
setUpReviewsTable();

// end connection
connection.end();
