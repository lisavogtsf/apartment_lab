var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js");

describe("Person", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      var jenny = new Person("jenny", "867-5309");
      expect(jenny.name).to.equal("jenny");
    });
    it("should have a phone number", function(){
      var jenny = new Person("jenny", "867-5309");
      expect(jenny.contact).to.equal("867-5309");     
    });
  });
  



});