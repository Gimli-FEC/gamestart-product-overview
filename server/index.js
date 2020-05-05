const express = require('express');

const bodyParser = require('body-parser');

const db = require('../db/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));


app.get('/:id', ({ params: { id } }, res) => {
  const data = { info: {}, images: [], esrb: {} };

  db.findProduct(id, (err1, results1) => {
    if (err1) {
      console.log(err1);
      return;
    }
    [data.info] = results1;
    db.getImages(id, (err2, results2) => {
      if (err2) {
        console.log(err2);
        return;
      }
      results2.forEach((item) => data.images.push(item));
      db.getEsrb(id, (err3, results3) => {
        if (err3) {
          console.log(err3);
          return;
        }
        [data.esrb] = results3;
        res.send(data);
      });
    });
  });
});


app.listen(port, () => {
  console.log(`Now listening on ${port}`);
});
