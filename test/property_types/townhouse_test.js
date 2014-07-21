// test townhouse
var expect = require("chai").expect,
  TownHouse = require("../../src/property_types/town_house.js")
  Property = require("../../src/property_types/property.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");
  // var app = require("../../src/main.js");

  var roper = new Manager("roper", "222-5555");
  var jenny = new Tenant("jenny", "867-5309");
  var brownstone = new TownHouse("882 Place");

describe('TownHouse', function(){

  describe('initialization', function(){
    it('should be an instance of TownHouse', function(){
      expect(brownstone instanceof TownHouse).to.eql(true);
    });
  });


});