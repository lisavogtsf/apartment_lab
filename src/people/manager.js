var person = require("./person");

function Manager(name, contact) {
  this.name = name;
  this.contact = contact;
  
  this.properties = [];
}

Manager.prototype.addProperty = function(property) {
  // add property from properties
};

Manager.prototype.removeProperty = function(property) {
  // remove properties
};

module.exports = Manager;