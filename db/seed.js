const db = require('./index.js');
const Detail = require('./Detail.js');
const UserRequest = require('./UserRequest.js');
const faker = require('faker');

const dummies = [];
const randomize = () => ({
  _index: '',
  address: faker.address.streetAddress(),
  price: faker.random.number({'min': 800000, 'max': 5000000}),
  body: faker.lorem.paragraphs(),
  subTitle: faker.random.words(),
  details: {
    factsAndFeatures: {
      type: faker.random.words(),
      yearBuilt: faker.date.past(),
      heating: faker.random.word(),
      cooling: faker.random.word(),
      parking: faker.random.word(),
      lot: faker.random.number({ 'min': 10, 'max': 100 }),
      daysOnZillow: faker.date.past(),
      pricePerSqft: faker.random.number({ 'min': 100, 'max': 1000 }),
      saves: faker.random.number({ 'min': 70, 'max': 700 })
    },
    interiorFeatures: {
      bedRoom: faker.random.number({ 'min': 1, 'max': 10 }),
      bathRoom: faker.random.words(),
      heatingAndCooling: faker.random.words(),
      basement: faker.random.words(),
      flooring: faker.random.number({ 'min': 1, 'max': 10 }),
      other: faker.random.words()
    },
    spacesAndMenities: {
      size: faker.random.number({ 'min': 1, 'max': 10 }),
      amenities: faker.random.words(),
      spaces: faker.random.words()
    },
    construction: {
      typeAndStyle: faker.random.words(),
      dates: {
        builtIn: faker.date.past(),
        remodel: faker.date.past()
      },
      materials: {
        roof: faker.random.words(),
        exterior: faker.random.words()
      },
      other: faker.random.words()
    },
    exteriorFeatures: {
      lot: {
        lot: faker.random.number({ 'min': 1, 'max': 10 }),
        lotWidth: faker.random.number({ 'min': 1, 'max': 10 })
      },
      other: faker.random.words()
    },
    parking: faker.random.words(),
    other: {
      lastSold: {
        soldDate: faker.date.past(),
        soldPrice: faker.random.number({'min': 800000, 'max': 5000000})
      }
    },
    activityOnZillow: {
      daysOnZillow: faker.date.past(),
      pastThirtydayView: faker.random.number({ 'min': 5, 'max': 50 }),
      savedLog: faker.random.number({ 'min': 5, 'max': 50 })
    }
  }
});

for (let i = 0; i < 101; i++) {	
  let aRandomObj = randomize();
  aRandomObj._index = i;
  dummies.push(aRandomObj);
}

const insertDummies = function() {
  return Detail.insertMany(dummies);
};

const firstBuyers = [
  {
    name: faker.random.words(),
    phone: faker.random.number({'min': 800000, 'max': 5000000}),
    mail: faker.random.words(),
    timeStamp: faker.date.past()
  },
  {
    name: faker.random.words(),
    phone: faker.random.number({'min': 800000, 'max': 5000000}),
    mail: faker.random.words(),
    timeStamp: faker.date.past()
  }
]


const insertDummyBuyer = () => {
  return UserRequest.insertMany(firstBuyers);
}

insertDummies();
insertDummyBuyer();