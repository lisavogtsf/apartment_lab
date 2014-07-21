var Property = require("./property.js");
var inherits = require("../inherits.js"); 

function Duplex(address) {
  this.address = address,
  this.maxUnits = 2
}

inherits(Property, Duplex);

// duplex methods?

module.exports = Duplex;