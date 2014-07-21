var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js");

// create Tenant and references
var jenny = new Tenant("jenny", "867-5309");
var ginger = new Person("ginger", "999-9999");
var scary = new Person("scary", "222-3333");
var posh = new Person("posh", "111-4444");

describe("Tenant", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      expect(jenny.name).to.equal("jenny");
    });
    it("should have a phone number", function(){
      expect(jenny.contact).to.equal("867-5309");    
    });
    it("should be an instanceof Tenant", function(){
      expect(jenny instanceof Tenant).to.eql(true);
    });
  });
  describe("#addReference", function(){
    it("references array should exist", function(){
      expect(jenny.references).to.exist;
    });
    it("should add new references", function(){
      jenny.references = ["ginger", "scary"];
      jenny.addReference("posh");
      expect(jenny.references[2]).to.eql("posh");
    });
  });

});