var Person = require("./person");
var inherits = require("../inherits.js"); 

function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  
  this.properties = [];
}
// 
inherits(Person, Manager);

Manager.prototype.addProperty = function(property) {
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};

module.exports = Manager;