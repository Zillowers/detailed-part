-- ---
-- Table 'Details'
-- 
-- ---
DROP TABLE IF EXISTS Detail;

CREATE TABLE Detail (
  _index SERIAL NOT NULL PRIMARY KEY,
  "address" VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  body TEXT NOT NULL,
  subTitle VARCHAR(150) NOT NULL,
  "type" VARCHAR(150) NOT NULL,
  yearBuilt VARCHAR(65) NOT NULL,
  heating VARCHAR(100) NOT NULL,
  cooling VARCHAR(100) NOT NULL,
  parkingFacts VARCHAR(100) NOT NULL,
  lotFacts VARCHAR(100) NOT NULL, 
  daysOnZillowFacts VARCHAR(65) NOT NULL,
  pricePerSqft INT NOT NULL,
  saves INT NOT NULL,
  bedRoom INT NOT NULL,
  bathRoom VARCHAR(150) NOT NULL,
  heatingAndCooling VARCHAR(150) NOT NULL,
  basement VARCHAR(150),
  flooring INT NOT NULL,
  otherInterior VARCHAR(150) NOT NULL,
  size INT NOT NULL,
  amenities VARCHAR(150) NOT NULL,
  spaces VARCHAR(150) NOT NULL,
  typeAndStyle VARCHAR(150) NOT NULL,
  builtIn VARCHAR(65) NOT NULL,
  remodel VARCHAR(65) NOT NULL,
  roof VARCHAR(150) NOT NULL,
  exterior VARCHAR(150) NOT NULL,
  otherConstruction VARCHAR(150) NOT NULL,
  lot INT NOT NULL,
  lotWidth INT NOT NULL,
  other VARCHAR(150) NOT NULL,
  parking VARCHAR(150) NOT NULL,
  soldDate VARCHAR(65) NOT NULL,
  soldPrice INT NOT NULL,
  daysOnZillow VARCHAR(65) NOT NULL,
  pastThirtydayView INT NOT NULL,
  savedLog INT NOT NULL
);