// big file to paste into node for testing

// var app = require('./src/main.js');
// var Person = app.Person;
// var Manager = app.Manager;
// var Tenant = app.Tenant;
// var Property = app.Property;
// var TownHouse = app.TownHouse;
// var Duplex = app.Duplex;

// var roper = new Manager("roper", "333-3333");
// var jenny = new Tenant("jenny", "867-5309");

// var paramount = new Property("paramount address");
// var brownstone = new TownHouse("brownstone address");
// var testProperty = new Property("testAddress");
// var home = new Property("777 4th Ave");


// roper.addProperty(paramount);
// roper.addProperty(brownstone);

//***************************

function Person(name, contact){
  this.name = name,
  this.contact = contact
};

var inherits = function(Child, Parent){
  Child.prototype = new Parent(),
  Child.prototype.constructor = Child
}

function Property(address) {
  this.address = address,
  this.manager = [],
  this.tenants = [],
  this.units = [],
  this.maxUnits = 1
};

Property.prototype.setManager = function(person){
  this.manager = person;
};

function Manager(name, contact) {
  this.name = name,
  this.contact = contact,
  
  this.properties = []
}
// 
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



