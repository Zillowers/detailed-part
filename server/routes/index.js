/* eslint-disable no-underscore-dangle */
/* eslint-disable no-throw-literal */
const express = require('express');
const Detail = require('../../db/Detail.js');
const UserRequest = require('../../db/UserRequest.js');
// const db = require('../../db');

const router = express.Router();

// CREATE listing detail
router.post('/homes/create-listing', (req, res) => {
  const newListing = req.body;
  let lastIndex = null;
  Detail.find().sort({ _index: -1 }).limit(1)
    .then((latestListing) => {
      lastIndex = latestListing._index;
      newListing._index = lastIndex + 1;
      Detail.create({ newListing })
        .then((entrySuccess) => {
          res.json(entrySuccess);
        })
        .catch((err) => {
          res.send(err);
        });
    })
    .catch((err) => {
      res.send(err);
    });
});

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

// UPDATE a detail of a listing
router.patch('/homes/:index/update-info', (req, res) => {
  Detail.findOneAndUpdate(
    { _index: req.params.index },
    { $set: { price: req.body.price } },
    { new: true },
  ).then((updatedDoc) => {
    res.send(updatedDoc);
  }).catch((err) => {
    res.status(404).send(err);
  });
});

// DELETE a listing detail
router.delete('/homes/:index/remove', (req, res) => {
  Detail.deleteOne({ _index: req.params.index })
    .then((success) => {
      res.send(success);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
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

// router.get('/homes/:index/detail-information', (req, res) => {
//   Detail.findOne({ _index: req.params.index })
//     .then((data) => {
//       const transformedData = {
//         _index: data.id,
//         address: data.address,
//         price: data.price,
//         body: data.body,
//         subTitle: data.subTitle,
//         details: {
//           factsAndFeatures: {
//             type: data.type,
//             yearBuilt: data.yearBuilt,
//             heating: data.heating,
//             cooling: data.cooling,
//             parking: data.parkingFacts,
//             lot: data.lotFacts,
//             daysOnZillow: data.daysOnZillowFacts,
//             pricePerSqft: data.pricePerSqft,
//             saves: data.saves,
//           },
//           interiorFeatures: {
//             bedRoom: data.bedRoom,
//             bathRoom: data.bathRoom,
//             heatingAndCooling: data.heatingAndCooling,
//             basement: data.basement,
//             flooring: data.flooring,
//             other: data.otherInterior,
//           },
//           spacesAndMenities: {
//             size: data.size,
//             amenities: data.amenities,
//             spaces: data.spaces,
//           },
//           construction: {
//             typeAndStyle: data.typeAndStyle,
//             dates: {
//               builtIn: data.builtIn,
//               remodel: data.remodel,
//             },
//             materials: {
//               roof: data.roof,
//               exterior: data.exterior,
//             },
//             other: data.otherConstruction,
//           },
//           exteriorFeatures: {
//             lot: {
//               lot: data.lot,
//               lotWidth: data.lotWidth,
//             },
//             other: data.other,
//           },
//           parking: data.parking,
//           other: {
//             lastSold: {
//               soldDate: data.soldDate,
//               soldPrice: data.soldPrice,
//             },
//           },
//           activityOnZillow: {
//             daysOnZillow: data.daysOnZillow,
//             pastThirtydayView: data.pastThirtydayView,
//             savedLog: data.savedLog,
//           },
//         },
//       };

//       res.send(transformedData);
//     });
// });
