const express = require("express");
const app =express();
const port =3000;
const db = require('./config/db.js')
const router = require('./route');

const bodyParser = require('body-parser');
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());




app.use('/', router);
  
  app.listen(port, () => {
    console.log(`app listening on port ${port}`)
  })