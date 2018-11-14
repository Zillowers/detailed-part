const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/detail-part';

const db = mongoose.connect(mongoUri);

module.exports = db;
