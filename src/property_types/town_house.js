var Property = require("./property.js");
var inherits = require("../inherits.js"); 

function TownHouse(address){
  // only has one unit per address
  this.address = address;
  this.units = [];
  this.manager = [];
  this.maxUnits = 1;
};

inherits(Property, TownHouse);

TownHouse.prototype.available = function(){
  // if there is already a tenant 
  // it should not be available
  if(this.units >= 1) {
    console.log("Not available");
    return -1;
  } else {
    console.log("Available");
    return 0;
  }
  
};


module.exports = TownHouse;
