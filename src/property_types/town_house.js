var Property = require("./property");
var inherits = require("../inherits.js"); 

function TownHouse(address){
  // only has one unit per address

};

inherits(Property, TownHouse);

TownHouse.prototype.available = function(){
  // a tenant it should not be available
};

// Property.prototype.setManager = function(person) {
//   // set this.manager to person
//   // set the manager of this property
//   this.manager = person;
// };

// Property.prototype.getManager = function(){
//   // return this.manager 
// };

// Property.prototype.addTenant = function(unit, tenant) {
//   // add tenant but check to make sure there
//   // is a manager first and a tenant has 2 references
// };

// Property.prototype.removeTenant = function(unit, tenant) {
//   // remove tenant
// };

// Property.prototype.availableUnits = function(){
//   // return num of units available
// }

// Property.prototype.rentedUnits = function(){
//   // return rented units
// }



module.exports = TownHouse;
