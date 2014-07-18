var person = require("./person.js");

function Tenant(name, contact) {
  this.name = name;
  this.contact = contact;
  this.references = [];
};

Tenant.prototype.addReference = function(reference){
  // add reference to references
  
};

module.exports = Tenant;
