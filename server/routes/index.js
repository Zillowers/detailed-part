/* eslint-disable no-throw-literal */

const express = require('express');
const Detail = require('../../db/Detail.js');
const UserRequest = require('../../db/UserRequest.js');
// const db = require('../../db');

const router = express.Router();

// CREATE listing detail

// READ ONE listing detail
router.get('/homes/:index/detail-information', (req, res) => {
  Detail.findOne({ _index: req.params.index })
    .then((data) => {
      res.send(data);
    });
});

// READ ALL listing details
router.get('/homes/all/detail-information', (req, res) => {
  Detail.find({})
    .then((data) => {
      res.send(data);
    });
});

// UPDATE a listing detail
router.put('/details/index/:index', (req, res) => {
  res.end();
});

// DELETE a listing detail
router.delete('/details/index/:index', (req, res) => {
  // req...
  Detail.deleteOne({});
  res.end();
});

// CREATE user request
router.post('/user-request', (req, res) => {
  const { body: { data } } = req;
  const eachPhone = Number(data.phone);
  UserRequest.findOne({ phone: eachPhone })
    .then((result) => {
      if (!eachPhone) {
        throw 'Please Fill the Form';
      } else if (!result) {
        UserRequest.create(data)
          .then((successEntry) => {
            res.send(successEntry);
          });
      } else {
        throw 'You already made an offer!';
      }
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
