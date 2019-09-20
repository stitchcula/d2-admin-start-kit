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
    define(['ApiClient', 'model/ProtobufAny', 'model/RpcStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ProtobufAny'), require('./RpcStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.Googlegolangorggenprotogoogleapislongrunningoperationsproto) {
      root.Googlegolangorggenprotogoogleapislongrunningoperationsproto = {};
    }
    root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.LongrunningOperation = factory(root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.ApiClient, root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.ProtobufAny, root.Googlegolangorggenprotogoogleapislongrunningoperationsproto.RpcStatus);
  }
}(this, function(ApiClient, ProtobufAny, RpcStatus) {
  'use strict';




  /**
   * The LongrunningOperation model module.
   * @module model/LongrunningOperation
   * @version 1
   */

  /**
   * Constructs a new <code>LongrunningOperation</code>.
   * This resource represents a long-running operation that is the result of a network API call.
   * @alias module:model/LongrunningOperation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>LongrunningOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LongrunningOperation} obj Optional instance to populate.
   * @return {module:model/LongrunningOperation} The populated <code>LongrunningOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ProtobufAny.constructFromObject(data['metadata']);
      }
      if (data.hasOwnProperty('done')) {
        obj['done'] = ApiClient.convertToType(data['done'], 'Boolean');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = RpcStatus.constructFromObject(data['error']);
      }
      if (data.hasOwnProperty('response')) {
        obj['response'] = ProtobufAny.constructFromObject(data['response']);
      }
    }
    return obj;
  }

  /**
   * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should have the format of `operations/some/unique/name`.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Service-specific metadata associated with the operation.  It typically contains progress information and common metadata such as create time. Some services might not provide such metadata.  Any method that returns a long-running operation should document the metadata type, if any.
   * @member {module:model/ProtobufAny} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
   * @member {Boolean} done
   */
  exports.prototype['done'] = undefined;
  /**
   * The error result of the operation in case of failure or cancellation.
   * @member {module:model/RpcStatus} error
   */
  exports.prototype['error'] = undefined;
  /**
   * The normal response of the operation in case of success.  If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`.  If the original method is standard `Get`/`Create`/`Update`, the response should be the resource.  For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name.  For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
   * @member {module:model/ProtobufAny} response
   */
  exports.prototype['response'] = undefined;



  return exports;
}));


