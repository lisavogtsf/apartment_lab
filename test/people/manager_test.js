var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");

console.log("running Manager test");
var roper = new Manager("roper", "333-3333");

describe("Manager", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      var jenny = new Manager("jenny", "867-5309");
      expect(jenny.name).to.equal("jenny");
    });
    it("should have a phone number", function(){
      var jenny = new Manager("jenny", "867-5309");
      expect(jenny.contact).to.equal("867-5309")  
    });
    // it("should have the proper constructor", function(){
    //   var jenny = new Manager("jenny", "867-5309");
    //   expect(jenny.constructor).to.equal("Manager");      
    // });
  });
  describe("#addProperty", function(){
    it("should add to the list", function(){
      roper.properties = ["miami", "dade", "key west"];
      roper.addProperty("florida");
      expect(roper.properties[3]).to.equal("florida");
    });
  });


  



});