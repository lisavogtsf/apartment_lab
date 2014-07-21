var app = require('../main.js')
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

Property.prototype.getManager = function(){
  // return this.manager 
  // ** error if the property has no manager
  return this.manager.name;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
  // if(this.tenants.length < this.maxUnits){

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
