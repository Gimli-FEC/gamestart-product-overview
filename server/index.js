const express = require('express');
const db = require('../db/index.js');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  var id = req.params.id;
  db.findProduct(id, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.send(data);
  });
});



app.listen(port, ()=>{
  console.log(`Now listening on ${port}`);
});