-- Create DATABASE Houses;
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
  lotFacts SMALLINT NOT NULL, 
  daysOnZillowFacts VARCHAR(65) NOT NULL,
  pricePerSqft SMALLINT NOT NULL,
  saves SMALLINT NOT NULL,
  bedRoom SMALLINT NOT NULL,
  bathRoom VARCHAR(150) NOT NULL,
  heatingAndCooling VARCHAR(150) NOT NULL,
  basement VARCHAR(150) NOT NULL,
  flooring SMALLINT NOT NULL,
  otherInterior VARCHAR(150) NOT NULL,
  size SMALLINT NOT NULL,
  amenities VARCHAR(150) NOT NULL,
  spaces VARCHAR(150) NOT NULL,
  typeAndStyle VARCHAR(150) NOT NULL,
  builtIn VARCHAR(65) NOT NULL,
  remodel VARCHAR(65) NOT NULL,
  roof VARCHAR(150) NOT NULL,
  exterior VARCHAR(150) NOT NULL,
  otherConstruction VARCHAR(150) NOT NULL,
  lot SMALLINT NOT NULL,
  lotWidth SMALLINT NOT NULL,
  other VARCHAR(150) NOT NULL,
  parking VARCHAR(150) NOT NULL,
  soldDate VARCHAR(65) NOT NULL,
  soldPrice INT NOT NULL,
  daysOnZillow VARCHAR(65) NOT NULL,
  pastThirtydayView SMALLINT NOT NULL,
  savedLog SMALLINT NOT NULL
);

CREATE TABLE DetailAddressIndex (
  _index SERIAL NOT NULL,
  "address" VARCHAR(100) NOT NULL PRIMARY KEY,
  price INT NOT NULL,
  body TEXT NOT NULL,
  subTitle VARCHAR(150) NOT NULL,
  "type" VARCHAR(150) NOT NULL,
  yearBuilt VARCHAR(65) NOT NULL,
  heating VARCHAR(100) NOT NULL,
  cooling VARCHAR(100) NOT NULL,
  parkingFacts VARCHAR(100) NOT NULL,
  lotFacts SMALLINT NOT NULL, 
  daysOnZillowFacts VARCHAR(65) NOT NULL,
  pricePerSqft SMALLINT NOT NULL,
  saves SMALLINT NOT NULL,
  bedRoom SMALLINT NOT NULL,
  bathRoom VARCHAR(150) NOT NULL,
  heatingAndCooling VARCHAR(150) NOT NULL,
  basement VARCHAR(150) NOT NULL,
  flooring SMALLINT NOT NULL,
  otherInterior VARCHAR(150) NOT NULL,
  size SMALLINT NOT NULL,
  amenities VARCHAR(150) NOT NULL,
  spaces VARCHAR(150) NOT NULL,
  typeAndStyle VARCHAR(150) NOT NULL,
  builtIn VARCHAR(65) NOT NULL,
  remodel VARCHAR(65) NOT NULL,
  roof VARCHAR(150) NOT NULL,
  exterior VARCHAR(150) NOT NULL,
  otherConstruction VARCHAR(150) NOT NULL,
  lot SMALLINT NOT NULL,
  lotWidth SMALLINT NOT NULL,
  other VARCHAR(150) NOT NULL,
  parking VARCHAR(150) NOT NULL,
  soldDate VARCHAR(65) NOT NULL,
  soldPrice INT NOT NULL,
  daysOnZillow VARCHAR(65) NOT NULL,
  pastThirtydayView SMALLINT NOT NULL,
  savedLog SMALLINT NOT NULL
);

-- COPY Detail(address, price, body, subtitle, type, yearbuilt, heating, cooling, parkingfacts, lotfacts, daysonzillowfacts, pricepersqft, saves, bedroom, bathroom, heatingandcooling, basement, flooring, otherinterior, size, amenities, spaces, typeandstyle, builtin, remodel, roof, exterior, otherconstruction, lot, lotwidth, other, parking, solddate, soldprice, daysonzillow, pastthirtydayview, savedlog)FROM '/Users/alexburkowsky/Documents/Coding/Hack_Reactor/SDC/detailed-part/db/postgres/data.tsv';

-- COPY detailaddressindex(address, price, body, subtitle, type, yearbuilt, heating, cooling, parkingfacts, lotfacts, daysonzillowfacts, pricepersqft, saves, bedroom, bathroom, heatingandcooling, basement, flooring, otherinterior, size, amenities, spaces, typeandstyle, builtin, remodel, roof, exterior, otherconstruction, lot, lotwidth, other, parking, solddate, soldprice, daysonzillow, pastthirtydayview, savedlog)FROM '/Users/alexburkowsky/Documents/Coding/Hack_Reactor/SDC/detailed-part/db/postgres/data.tsv';

-- INSERT INTO detail (address, price, body, subtitle, type, yearbuilt, heating, cooling, parkingfacts, lotfacts, daysonzillowfacts, pricepersqft, saves, bedroom, bathroom, heatingandcooling, basement, flooring, otherinterior, size, amenities, spaces, typeandstyle, builtin, remodel, roof, exterior, otherconstruction, lot, lotwidth, other, parking, solddate, soldprice, daysonzillow, pastthirtydayview, savedlog) VALUES ('250-AlexJon-Way', 788787, 'Quas quibusdam esse eius rem. Magnam distinctio ea est nostrum. Neque alias praesentium perspiciatis id aut cupiditate sit ut aliquam.', 'Triple-buffered', 'expedite Soft Vermont', 'Mon Jan 15 2018 10:26:35 GMT-0800 (Pacific Standard Time)', 'hard drive', 'magenta', 'quantifying', 72, 'Wed Dec 27 2017 09:24:16 GMT-0800 (Pacific Standard Time)', 453, 532, 2, 'Licensed Granite Ball Orchestrator Lights', 'feed Bedfordshire', 'navigate Table Principal', 3, 'dogs', 2, 'embrace index payment', 'Division Handcrafted Steel Shirt', 'Usability Vermont Samoa', 'Sun Nov 26 2017 16:00:53 GMT-0800 (Pacific Standard Time)', 'Sun Aug 19 2018 10:44:38 GMT-0700 (Pacific Daylight Time)', 'fixed', 'driver matrix', 'Small Practical', 11, 5, 'Incredible New York', 'Executive productivity payment', 'Sun Jan 07 2018 02:39:47 GMT-0800 (Pacific Standard Time)', 4848358, 'Fri May 11 2018 22:16:27 GMT-0700 (Pacific Daylight Time)', 13, 51);