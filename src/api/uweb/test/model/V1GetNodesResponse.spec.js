/**
 * uweb/v1/uweb.proto
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Uwebv1uwebproto);
  }
}(this, function(expect, Uwebv1uwebproto) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Uwebv1uwebproto.V1GetNodesResponse();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1GetNodesResponse', function() {
    it('should create an instance of V1GetNodesResponse', function() {
      // uncomment below and update the code to test V1GetNodesResponse
      //var instance = new Uwebv1uwebproto.V1GetNodesResponse();
      //expect(instance).to.be.a(Uwebv1uwebproto.V1GetNodesResponse);
    });

    it('should have the property root (base name: "root")', function() {
      // uncomment below and update the code to test the property root
      //var instance = new Uwebv1uwebproto.V1GetNodesResponse();
      //expect(instance).to.be();
    });

  });

}));
