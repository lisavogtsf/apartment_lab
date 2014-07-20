function Property(address) {
  this.manager = undefined;
  this.address = address;
  this.units = [];
}

Property.prototype.setManager = function(person) {
  // set this.manager to person
  if (person instanceof Manager){
    this.manager = person;    
  } else {
    console.log("You must be a Manager to manage a property!");
    return -1;
  }
};

Property.prototype.getManager = function(){
  // return this.manager 
  return this.manager.name;
};

Property.prototype.addTenant = function(unit, tenant) {
  // add tenant but check to make sure there
  // is a manager first and a tenant has 2 references
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


module.exports = {
  Property: Property
  
  // Property.prototype: Property.prototype
  // Property.setManager: Property.setManager,
  // Property.prototype.getManager: Property.prototype.getManager,
  // Property.prototype.addTenant: Property.prototype.addTenant,
  // Property.prototype.removeTenant: Property.prototype.removeTenant,
  // Property.prototype.availableUnits: Property.prototype.availableUnits,
  // Property.prototype.rentedUnits: Property.prototype.rentedUnits
}