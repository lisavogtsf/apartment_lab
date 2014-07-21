var Person = require("./person.js");
var inherits = require("../inherits.js"); 

function Tenant(name, contact) {
  this.name = name;
  this.contact = contact;
  this.references = [];
};

inherits(Person, Tenant);

Tenant.prototype.addReference = function(reference){
  // reference should be a Person
  this.references.push(reference);
};

module.exports = Tenant;
