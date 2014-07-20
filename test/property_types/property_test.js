var expect = require("chai").expect,
  app = require("../../src/main.js"),
  Property = require("../../src/property_types/property.js"),
  Tenant = require("../../src/people/tenant.js"),
  Manager = require("../../src/people/manager.js");



var paramount = new Property("2865 Jackson St");
var roper = new app.Manager("roper", "333-3333");
var jenny = new app.Tenant("jenny", "867-5309");

describe("Property", function(){
  describe('property constructor', function(){
    it('should exist', function(){
      // how to add units? not a parameter
      expect(paramount).to.exist;
    });
    it('should be an instanceof Property', function(){
      expect(paramount instanceof Property).to.equal(true);
    });
  });
  describe('#setManager', function(){
    it('should make someone manager of a property', function(){
      property.setManager(roper);
      expect(property.manager).to.equal(roper);
    });
    it('should not allow a non-Manager to manage', function(){
      var error = paramount.setManager(jenny);
      expect(error).to.equal(-1);
    });
  });
// test getManager
  describe('#getManager', function(){
    it('should return the manager name', function(){
      expect(paramount.getManager.name).to.equal(roper);
    });
  });

// test addTenant

// test removeTenant

// test available units

// test rented units



});
