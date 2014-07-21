var Property = require("./property.js");
var inherits = require("../inherits.js"); 

function TownHouse(address){
  // only has one unit per address
  this.address = address,
  this.maxUnits = 1
};

inherits(Property, TownHouse);

TownHouse.prototype.available = function(){
  // if there is already a tenant 
  // it should not be available
  

};


module.exports = TownHouse;
