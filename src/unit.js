function Unit (number, building, sqft, rent) {
  // set params above using this
  this.number = number;
  this.sqft = sqft;
  this.building = building;
  this.rent = rent;
  this.tenant = null;
}

Unit.prototype.available = function(){
  // check for tenant
}



