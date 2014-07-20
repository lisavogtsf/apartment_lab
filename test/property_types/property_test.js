var expect = require("chai").expect,
  Property = require("../../src/property_types/property.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");


var testProperty = new Property("testAddress");
var roper = new Manager("roper", "333-3333");
var jenny = new Tenant("jenny", "867-5309");

describe("Property", function(){
  describe('property constructor', function(){
    it('should exist', function(){
      // how to add units? not a parameter
      expect(testProperty).to.exist;
    });
    it('should be an instanceof Property', function(){
      expect(testProperty instanceof Property).to.equal(true);
    });
  });
  describe('#setManager', function(){
    it('MANUAL set manager', function(){
      testProperty.manager = roper;
      expect(testProperty.manager.name).to.eql('roper');
    })
    it('should make someone manager of a property', function(){
      testProperty.setManager(roper);
      expect(testProperty.manager.name).to.eql('roper');
    });
//     it('should not allow a non-Manager to manage', function(){
//       var error = testProperty.setManager(jenny);
//       expect(error).to.equal(-1);
//     });
  });
// // test getManager
//   describe('#getManager', function(){
//     it('should return the manager name', function(){
//       expect(testProperty.getManager.name).to.equal(roper);
//     });
//   });

// test addTenant

// test removeTenant

// test available units

// test rented units



});
