const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const detailedSchema = require('./schema.js');

const Detail = mongoose.model('Detail', detailedSchema);

module.exports = Detail;
