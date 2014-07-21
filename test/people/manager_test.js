var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");

var jenny = new Manager("jenny", "867-5309");
var roper = new Manager("roper", "333-3333");

describe("Manager", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      expect(jenny.name).to.equal("jenny");
    });
    it("should have a phone number", function(){
      expect(jenny.contact).to.equal("867-5309");  
    });
    it("should be an instanceof Manager", function(){
      expect(roper instanceof Manager).to.eql(true);
    });
  });
  describe("#addProperty", function(){
    it("should add to the list", function(){
      roper.properties = ["miami", "dade", "key west"];
      roper.addProperty("florida");
      expect(roper.properties[3]).to.equal("florida");
    });
  });
  describe("#removeProperty", function(){
    it("should remove property from the list", function(){
      roper.properties = ["miami", "dade", "key west"];
      var removed = roper.removeProperty("dade");
      expect(roper.properties).to.eql(["miami", "key west"]);
    });
  });

  



});