const express = require('express');
const db = require('../db/index.js');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));



app.get('/:id', (req, res) => {
  var id = req.params.id;
  var data = { info: {}, images: [], esrb: {} };

  db.findProduct(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    data.info = results[0];
    db.getImages(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      results.forEach(item => data.images.push(item.url));
      db.getEsrb(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        data.esrb = results[0];
        res.send(data);
      });
    });
  });
});


app.listen(port, ()=>{
  console.log(`Now listening on ${port}`);
});