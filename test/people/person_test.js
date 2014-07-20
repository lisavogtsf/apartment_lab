var expect = require("chai").expect,
  Person = require("../../src/people/person.js");

var jenny = new Person("jenny", "867-5309");

describe("Person", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      expect(jenny.name).to.exists;
    });
    it("should have a phone number", function(){
      expect(jenny.contact).to.equal("867-5309");    
    });
    it("should be an instanceof Person", function(){
      expect(jenny instanceof Person).to.eql(true);
    });
  });
  
});