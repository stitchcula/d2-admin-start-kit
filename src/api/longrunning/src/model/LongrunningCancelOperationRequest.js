/**
 * google.golang.org/genproto/googleapis/longrunning/operations.proto
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
    if (!root.Googlegolangorggenprotogoogleapislongrunningoperationsproto) {
      root.Googlegolangorggenprotogoogleapislongrunningoperationsproto = {};
    }
    root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.LongrunningCancelOperationRequest = factory(root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LongrunningCancelOperationRequest model module.
   * @module model/LongrunningCancelOperationRequest
   * @version 1
   */

  /**
   * Constructs a new <code>LongrunningCancelOperationRequest</code>.
   * The request message for [Operations.CancelOperation][google.longrunning.Operations.CancelOperation].
   * @alias module:model/LongrunningCancelOperationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>LongrunningCancelOperationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LongrunningCancelOperationRequest} obj Optional instance to populate.
   * @return {module:model/LongrunningCancelOperationRequest} The populated <code>LongrunningCancelOperationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The name of the operation resource to be cancelled.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


