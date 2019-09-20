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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Uwebv1uwebproto) {
      root.Uwebv1uwebproto = {};
    }
    root.Uwebv1uwebproto.V1LoginRequest = factory(root.Uwebv1uwebproto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1LoginRequest model module.
   * @module model/V1LoginRequest
   * @version 1
   */

  /**
   * Constructs a new <code>V1LoginRequest</code>.
   * @alias module:model/V1LoginRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>V1LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1LoginRequest} obj Optional instance to populate.
   * @return {module:model/V1LoginRequest} The populated <code>V1LoginRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'String');
      }
      if (data.hasOwnProperty('pass')) {
        obj['pass'] = ApiClient.convertToType(data['pass'], 'String');
      }
      if (data.hasOwnProperty('captcha_id')) {
        obj['captcha_id'] = ApiClient.convertToType(data['captcha_id'], 'String');
      }
      if (data.hasOwnProperty('captcha_value')) {
        obj['captcha_value'] = ApiClient.convertToType(data['captcha_value'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {String} pass
   */
  exports.prototype['pass'] = undefined;
  /**
   * @member {String} captcha_id
   */
  exports.prototype['captcha_id'] = undefined;
  /**
   * @member {String} captcha_value
   */
  exports.prototype['captcha_value'] = undefined;



  return exports;
}));


