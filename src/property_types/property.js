var app = require("../main.js"),
  Tenant = require("../people/tenant.js");
  Manager = require("../people/manager.js");

function Property(address) {
  this.address = address;
  this.manager = [];
  this.units = [];
  // maybe don't need tenants array
  // this.tenants = [];
  this.maxUnits = 1;
};

Property.prototype.setManager = function(person){
  if (person instanceof Manager
    && this.manager.length < 1){
  this.manager.push(person);  
  } else { 
    console.log("Cannot set manager");
    return -1;
  }
};

Property.prototype.getManager = function(){
  // return this.manager 
  // ** error if the property has no manager
  if(this.manager < 1) {
    console.log("This building has no manager.");
    return -1;
  } else {
    return this.manager.name;
  }
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  if(this.tenants.length < this.maxUnits 
    && this.manager.length > 0){
    if(tenant instanceof app.Tenant && tenant.references.length >= 2) {
      this.tenants.push(tenant);
    } else {
      console.log("Cannot add tenant, problem with tenant/references");
      return -1;
    }
  } else {
    console.log("Cannot add tenant, problem with building units/manager");
    return -1;
  }
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant if the designated tenant
  // is in the designated unit
  if (this.tenants[unit] === tenant){
    this.tenants.splice(unit, 1);
  } else {
    console.log("That tenant does not live in that unit.")
    return -1;
  }
};

Property.prototype.availableUnits = function(){
  // return num of units available
  return this.units.length - this.maxUnits;

}

Property.prototype.rentedUnits = function(){
  // return rented units
  return this.units.length;
}


module.exports = Property;
