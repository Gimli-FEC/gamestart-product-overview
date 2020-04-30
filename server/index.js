const express = require('express');
const db = require('../db/index.js');
const app = express();
const port = 3000;

app.use(express.static('public'));





app.listen(port, ()=>{
  console.log(`Now listening on ${port}`);
});