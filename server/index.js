const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/index.js');
// const db = require('../db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/listings/homes/:index', express.static(path.join(__dirname, '/../client/dist/')));

app.use('/listings', router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('working on ', port);
});
