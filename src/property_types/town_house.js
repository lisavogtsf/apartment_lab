var Property = require("./property");
var inherits = require("../inherits.js"); 

function TownHouse(address){
  // only has one unit per address
};

inherits(Property, TownHouse);

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

module.exports = TownHouse;
