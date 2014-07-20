var app = require('../main.js');

function Property(address) {
  this.address = address;
  this.manager = [];
  this.tenants = [];
  this.units = [];
  this.numUnits = 1;
}

Property.prototype.setManager = function(person) {
  // only add if there is no manager, and 
  // person is a manager
  if (this.manager.length < 1 && person instanceof app.Manager){
    this.manager = person;    
  } else {
    console.log("Either this person is not a Manager or this building already has a Manager.");
    return -1;
  }

};

Property.prototype.getManager = function(){
  // return this.manager 
  // ** error if the property has no manager
  return this.manager.name;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  // if(this.tenants.length < this.numUnits){

    // unsure how to do this
  
  // if(this.manager.length > 0) {
  //   if(tenant instanceof app.Tenant && tenant.references.length >= 2) {
  //     this.tenants.push(tenant);
  //   }   
  // } else {
  //   console.log("Cannot add tenant");
  //   return -1;
  // }

};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
};

Property.prototype.availableUnits = function(){
  // return num of units available
}

Property.prototype.rentedUnits = function(){
  // return rented units
}


module.exports = Property;
