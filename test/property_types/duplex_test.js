var expect = require("chai").expect,
  app = require("../../src/main.js");

describe('Duplex', function(){
  describe('initialization', function(){
    it('should be an instance of Duplex', function(){
      var testDuplex = new app.Duplex("5th Avenue");
      expect(testDuplex instanceof app.Duplex).to.eql(true);
    });
  });
});