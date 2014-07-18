var expect = require("chai").expect,
  Person = require("../../src/people/person.js");

console.log("running Person test");

describe("Person", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      var jenny = new Person("jenny", "867-5309");
      expect(jenny.name).to.exists;
    });
    it("should have a phone number", function(){
      var jenny = new Person("jenny", "867-5309");
      expect(jenny.contact).to.equal("867-5309");     
    });
  });
  
});