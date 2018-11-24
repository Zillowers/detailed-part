const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost:9042'],
  keyspace: 'houses',
});
client.connect((err) => {
  if (err) {
    console.log('CONNECTION ERROR: ', err);
  }
});

module.exports = client;
