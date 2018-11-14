const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  mail: { type: String },
  timeStamp: { type: Date },
});

const UserRequest = mongoose.model('UserRequest', userSchema);

module.exports = UserRequest;
