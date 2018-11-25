/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-throw-literal */
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models/index.js');
const utils = require('./utils.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}/listings/homes`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/listings/homes/:index', express.static(path.join(__dirname, '/../client/dist/')));

// CREATE listing detail
app.post('/listings/homes/create-listing', async (req, res) => {
  // newListing is conformed to an array on client for efficient querying
  const newListing = req.body;
  try {
    const insertResult = await models.Index.addListing(newListing);
    res.status(200).send(insertResult);
  } catch (err) {
    res.status(400).send(err);
  }
});

// READ ONE listing detail
app.get('/listings/homes/:index/detail-information', async (req, res) => {
  const identifier = req.params.index;
  if (!isNaN(identifier)) {
    try {
      const data = await models.Index.getOneListing('id', identifier);
      const transformedData = utils(data);
      res.send(transformedData);
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    try {
      // need to place string in quotes as a parameter to allow for integer params above
      const data = await models.Address.getOneListing('address', `'${identifier}'`);
      const transformedData = utils(data);
      res.send(transformedData);
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

// READ ALL listing details
app.get('/listings/homes/all/detail-information', async (req, res) => {
  try {
    const data = await models.Index.getAllListings();
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// // UPDATE a detail of a listing
app.patch('/listings/homes/:index/update-info', async (req, res) => {
  const updatesReq = req.body;
  const identifier = req.params.index;
  const keys = Object.keys(updatesReq);

  for (let i = 0; i < keys.length; i += 1) {
    keys[i] += ` = ${updatesReq[keys[i]]}`;
  }
  const updateStr = keys.join(', ');
  try {
    const updateResult = await models.Index.updateListing(updateStr, identifier);
    res.send(updateResult);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE a listing detail
app.delete('/listings/homes/:index/remove', async (req, res) => {
  const identifier = req.params.index;
  try {
    const deletionResult = await models.Index.deleteListing(identifier);
    res.send(deletionResult);
  } catch (err) {
    res.status(400).send(err);
  }
});
