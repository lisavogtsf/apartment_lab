var Person = require("./person");
var inherits = require("../inherits.js"); 

function Manager(name, contact) {
  this.name = name,
  this.contact = contact,
  
  this.properties = []
}
 
inherits(Person, Manager);

Manager.prototype.addProperty = function(property) {
  // ** may need to check that there is not already
  // a manager of the property
  this.properties.push(property);
};

Manager.prototype.removeProperty = function(property) {
  // ** need to check whether the manager has this 
  // property in the first place

  var oldProperty = this.properties.indexOf(property);
  // return value is for checking
  var removed = this.properties.splice(oldProperty, 1);
  return removed;

};

module.exports = Manager;