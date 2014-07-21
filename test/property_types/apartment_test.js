var expect = require("chai").expect,
  ApartmentBuilding = require("../../src/property_types/apartment_building.js"),
  Property = require("../../src/property_types/property.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");

  describe('ApartmentBuilding', function(){
    describe('initialization', function(){
      it('should be an instanceof ApartmentBuilding', function(){
        var trumpTower = new ApartmentBuilding("Trump Tower", "Central Park South");
        expect(trumpTower instanceof ApartmentBuilding).to.eql(true);
      });
    });
  });