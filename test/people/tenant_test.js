var expect = require("chai").expect,
  Person = require("../../src/people/person.js"),
  Tenant = require("../../src/people/tenant.js");

var jenny = new Tenant("jenny", "867-5309");
console.log("running Tenant test");

describe("Tenant", function(){
  describe("initialization", function(){
    it("should have a certain name", function(){
      // var jenny = new Tenant("jenny", "867-5309");
      expect(jenny.name).to.equal("jenny");
    });
    it("should have a phone number", function(){
      // var jenny = new Tenant("jenny", "867-5309");
      expect(jenny.contact).to.equal("867-5309");    
    });
  //   it("should have the correct constructor", function(){
  //     var jenny = new Tenant("jenny", "867-5309");
  //     expect(Tenant.prototype).to.equal("Tenant");
  //   })
  });
  describe("#addReference", function(){
    it("references array should exist", function(){
      expect(jenny.references).to.exist;
    });
    it("should add new references", function(){
      jenny.references = ["joe", "bob", "jane"];
      jenny.addReference("lisa");
      var ref = jenny.references[3]
      expect(ref).to.eql("lisa");
    });
  });



});