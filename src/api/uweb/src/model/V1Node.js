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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/V1Node'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1Node'));
  } else {
    // Browser globals (root is window)
    if (!root.Uwebv1uwebproto) {
      root.Uwebv1uwebproto = {};
    }
    root.Uwebv1uwebproto.V1Node = factory(root.Uwebv1uwebproto.ApiClient, root.Uwebv1uwebproto.V1Node);
  }
}(this, function(ApiClient, V1Node) {
  'use strict';




  /**
   * The V1Node model module.
   * @module model/V1Node
   * @version 1
   */

  /**
   * Constructs a new <code>V1Node</code>.
   * @alias module:model/V1Node
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>V1Node</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1Node} obj Optional instance to populate.
   * @return {module:model/V1Node} The populated <code>V1Node</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('addr')) {
        obj['addr'] = ApiClient.convertToType(data['addr'], 'String');
      }
      if (data.hasOwnProperty('hardware_info')) {
        obj['hardware_info'] = ApiClient.convertToType(data['hardware_info'], 'String');
      }
      if (data.hasOwnProperty('not_support_interface')) {
        obj['not_support_interface'] = ApiClient.convertToType(data['not_support_interface'], {'String': 'Boolean'});
      }
      if (data.hasOwnProperty('children')) {
        obj['children'] = ApiClient.convertToType(data['children'], [V1Node]);
      }
    }
    return obj;
  }

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} addr
   */
  exports.prototype['addr'] = undefined;
  /**
   * @member {String} hardware_info
   */
  exports.prototype['hardware_info'] = undefined;
  /**
   * @member {Object.<String, Boolean>} not_support_interface
   */
  exports.prototype['not_support_interface'] = undefined;
  /**
   * @member {Array.<module:model/V1Node>} children
   */
  exports.prototype['children'] = undefined;



  return exports;
}));


