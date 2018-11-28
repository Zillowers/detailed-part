const cassandra = require('cassandra-driver');
require('dotenv').config();

const { types: distance } = cassandra;

const options = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  contactPoints: [
    process.env.DB_CONTACT1,
    process.env.DB_CONTACT2,
    process.env.DB_CONTACT3,
  ],
  keyspace: process.env.DB_KEYSPACE,
  pooling: {
    setMaxRequestsPerConnection: {
      [distance.local]: 32768,
      [distance.remote]: 2048,
    },
  },
};
const client = new cassandra.Client(options);
client.connect((err) => {
  if (err) {
    console.log('CONNECTION ERROR: ', err);
  }
});

module.exports = client;
