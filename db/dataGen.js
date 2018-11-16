/* eslint-disable no-underscore-dangle */
const faker = require('faker');
const fs = require('fs');

const randomize = () => ({
  // _index: '', -> only need for mongo or cassandra
  // address: faker.address.streetAddress(), -> in addresses.tsv
  price: faker.random.number({ min: 800000, max: 5000000 }),
  body: faker.lorem.paragraph(),
  subTitle: faker.random.words(),
  type: faker.random.words(),
  yearBuilt: faker.date.past(),
  heating: faker.random.word(),
  cooling: faker.random.word(),
  parkingFacts: faker.random.word(),
  lotFacts: faker.random.number({ min: 10, max: 100 }),
  daysOnZillowFacts: faker.date.past(),
  pricePerSqft: faker.random.number({ min: 100, max: 1000 }),
  saves: faker.random.number({ min: 70, max: 700 }),
  bedRoom: faker.random.number({ min: 1, max: 10 }),
  bathRoom: faker.random.words(),
  heatingAndCooling: faker.random.words(),
  basement: faker.random.words(),
  flooring: faker.random.number({ min: 1, max: 10 }),
  otherInterior: faker.random.words(),
  size: faker.random.number({ min: 1, max: 10 }),
  amenities: faker.random.words(),
  spaces: faker.random.words(),
  typeAndStyle: faker.random.words(),
  builtIn: faker.date.past(),
  remodel: faker.date.past(),
  roof: faker.random.words(),
  exterior: faker.random.words(),
  otherConstruction: faker.random.words(),
  lot: faker.random.number({ min: 1, max: 10 }),
  lotWidth: faker.random.number({ min: 1, max: 10 }),
  other: faker.random.words(),
  parking: faker.random.words(),
  soldDate: faker.date.past(),
  soldPrice: faker.random.number({ min: 800000, max: 5000000 }),
  daysOnZillow: faker.date.past(),
  pastThirtydayView: faker.random.number({ min: 5, max: 50 }),
  savedLog: faker.random.number({ min: 5, max: 50 }),
});

// for (let i = 0; i < 10000000; i += 1) {
//   const aRandomObj = randomize();
//   aRandomObj._index = i;
// }

const wstream = fs.createWriteStream('db/postgres/detail.tsv');
const fakeDataGenerator = (n) => {
  for (let i = n; i <= 10000000; i += 1) {
    const data = randomize();
    if (!wstream.write(`${data.price}\t${data.body}\t${data.subTitle}\t${data.type}\t${data.yearBuilt}\t${data.heating}\t${data.cooling}\t${data.parkingFacts}\t${data.lotFacts}\t${data.daysOnZillowFacts}\t${data.pricePerSqft}\t${data.saves}\t${data.bedRoom}\t${data.bathRoom}\t${data.heatingAndCooling}\t${data.basement}\t${data.flooring}\t${data.otherInterior}\t${data.size}\t${data.amenities}\t${data.spaces}\t${data.typeAndStyle}\t${data.builtIn}\t${data.remodel}\t${data.roof}\t${data.exterior}\t${data.otherConstruction}\t${data.lot}\t${data.lotWidth}\t${data.other}\t${data.parking}\t${data.soldDate}\t${data.soldPrice}\t${data.daysOnZillow}\t${data.pastThirtydayView}\t${data.savedLog}\n`)) {
      wstream.once('drain', () => {
        fakeDataGenerator(i + 1);
      });
      return;
    }
  }
  wstream.end();
};
fakeDataGenerator(1);
