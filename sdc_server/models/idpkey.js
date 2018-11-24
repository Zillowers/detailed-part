const Model = require('./model.js');
const db = require('../../sdc_db/index.js');

class Index extends Model {
  constructor() {
    super('idpkey');
  }

  getOneListing(column, identifier) {
    return super.getOneListing.call(this, column, identifier);
  }

  addListing(listingInput) {
    const query = `INSERT INTO ${this.tablename} (id, address, price, body, subtitle, type, yearbuilt, heating, cooling, parkingfacts, lotfacts, daysonzillowfacts, pricepersqft, saves, bedroom, bathroom, heatingandcooling, basement, flooring, otherinterior, size, amenities, spaces, typeandstyle, builtin, remodel, roof, exterior, otherconstruction, lot, lotwidth, other, parking, solddate, soldprice, daysonzillow, pastthirtydayview, savedlog) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    return db.execute(query, listingInput, { prepare: true });
  }

  getAllListings() {
    const query = `SELECT * FROM ${this.tablename}`;
    return db.execute(query).then(data => data.rows);
  }

  updateListingProperty(updates, identifier) {
    const query = `UPDATE ${this.tablename} SET ${updates} WHERE id = ${identifier}`;
    return db.execute(query);
  }

  deleteListing(identifier) {
    const query = `DELETE * FROM ${this.tablename} WHERE id = ${identifier}`;
    return db.execute(query);
  }
}

module.exports = new Index();
