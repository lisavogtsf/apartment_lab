var Property = require("./property.js");
var inherits = require("../inherits.js"); 

function ApartmentBuilding(name, address) {
  // A building can have many many units 
  this.name = name;
  this.address = address;
}

inherits(Property, ApartmentBuilding);

module.exports = ApartmentBuilding;