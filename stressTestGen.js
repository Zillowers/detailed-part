const faker = require('faker');
const fs = require('fs');

const wstream = fs.createWriteStream('./stress-test.csv');
const testGenerator = (n) => {
  for (let i = n; i <= 1000000; i += 1) {
    const num = faker.random.number({ min: 500000, max: 10000000 });
    if (!wstream.write(`${num}\n`)) {
      wstream.once('drain', () => {
        testGenerator(i + 1);
      });
      return;
    }
  }
  wstream.end();
};
testGenerator(1);
