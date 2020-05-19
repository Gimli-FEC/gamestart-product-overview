const express = require('express');

const bodyParser = require('body-parser');

const expressStaticGzip = require('express-static-gzip');

const db = require('../db/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(express.static('public'));

app.use('/', expressStaticGzip('public', {
  enableBrotli: true,
  orderPreference: ['br','gzip']
}));

app.get('/overview/:id', ({ params: { id } }, res) => {

  if (Number(id) > 100) {
    id = '100';
  } else if (Number(id) < 1) {
    id = '1';
  }

  const data = { info: {}, esrb: {} };

  db.findProduct(id, (err1, results1) => {
    if (err1) {
      console.log(err1);
      return;
    }
    [data.info] = results1;
    db.getEsrb(id, (err2, results2) => {
      if (err2) {
        console.log(err2);
        return;
      }
      [data.esrb] = results2;
      res.send(data);
    });
  });
});

app.get('/overview/images/:id', ({ params: { id } }, res) => {

  if (Number(id) > 100) {
    id = '100';
  } else if (Number(id) < 1) {
    id = '1';
  }

  db.getImages(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results);
  });
});

app.get('/overview/reviews/:id', ({ params: { id } }, res) => {

  if (Number(id) > 100) {
    id = '100';
  } else if (Number(id) < 1) {
    id = '1';
  }

  db.getReviews(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results[0]);
  });
});

module.exports = app;
