const express = require('express');

const bodyParser = require('body-parser');

const db = require('../db/index.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/:id', ({ params: { id } }, res) => {
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

app.get('/images/:id', ({ params: { id } }, res) => {
  db.getImages(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(results);
  });
});


module.exports = app;
