const db = require('../../sdc_db/index.js');

class Model {
  constructor(tablename) {
    this.tablename = tablename;
  }

  getOneListing(column, identifier) {
    const query = `SELECT * FROM ${this.tablename} WHERE ${column} = ${identifier}`;
    // add { prepare: true } for testing
    return db.execute(query, { prepare: true }).then(data => data.rows[0]);
  }
}

module.exports = Model;
