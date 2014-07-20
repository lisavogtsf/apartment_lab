// test townhouse
var expect = require("chai").expect,
  app = require("../../src/main.js");

describe('TownHouse', function(){

  beforeEach('reset', function(){
    var mgr = new app.Manager("roper", "222-5555");
    var ten = new app.Tenant("jenny", "867-5309");
  });

  describe('initialization', function(){
    it('should be an instance of TownHouse', function(){
      var townhouseTest = new app.TownHouse("882 Place");
      expect(townhouseTest instanceof app.TownHouse).to.eql(true);
    });


  });
});