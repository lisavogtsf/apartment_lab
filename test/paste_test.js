// // big file to paste into node for testing

// var app = require('./src/main.js');
// var Person = app.Person;
// var Manager = app.Manager;
// var Tenant = app.Tenant;
// var Property = app.Property;
// var TownHouse = app.TownHouse;
// var Duplex = app.Duplex;

// var testProperty = new Property("testAddress");
// var roper = new Manager("roper", "333-3333");
// var jenny = new Tenant("jenny", "867-5309");

// // Property

// function Property(address) {
//   this.address = address;
//   this.manager = [];
//   this.tenants = [];
//   this.units = [];
//   this.numUnits = 1;
// }

// Property.prototype.setManager = function(person) {
//   // only add if there is no manager, and 
//   // person is a manager

//   // code below breaking tests?
//   if (this.manager.length < 1 && person instanceof app.Manager){
//     this.manager = person;    
//   } else {
//     console.log("Either this person is not a Manager or this building already has a Manager.");
//     return -1;
//   }

// };

// Property.prototype.getManager = function(){
//   // return this.manager 
//   // ** error if the property has no manager
//   return this.manager.name;
// };