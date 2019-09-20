# Googlegolangorggenprotogoogleapislongrunningoperationsproto.OperationsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOperation**](OperationsApi.md#cancelOperation) | **POST** /v1/{name}:cancel | Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn&#39;t support this method, it returns &#x60;google.rpc.Code.UNIMPLEMENTED&#x60;.  Clients can use [Operations.GetOperation][google.longrunning.Operations.GetOperation] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to &#x60;Code.CANCELLED&#x60;.
[**deleteOperation**](OperationsApi.md#deleteOperation) | **DELETE** /v1/{name} | Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn&#39;t support this method, it returns &#x60;google.rpc.Code.UNIMPLEMENTED&#x60;.
[**getOperation**](OperationsApi.md#getOperation) | **GET** /v1/{name} | Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.


<a name="cancelOperation"></a>
# **cancelOperation**
> ProtobufEmpty cancelOperation(name, body)

Starts asynchronous cancellation on a long-running operation.  The server makes a best effort to cancel the operation, but success is not guaranteed.  If the server doesn&#39;t support this method, it returns &#x60;google.rpc.Code.UNIMPLEMENTED&#x60;.  Clients can use [Operations.GetOperation][google.longrunning.Operations.GetOperation] or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an [Operation.error][google.longrunning.Operation.error] value with a [google.rpc.Status.code][google.rpc.Status.code] of 1, corresponding to &#x60;Code.CANCELLED&#x60;.

### Example
```javascript
var Googlegolangorggenprotogoogleapislongrunningoperationsproto = require('googlegolangorggenprotogoogleapislongrunningoperationsproto');

var apiInstance = new Googlegolangorggenprotogoogleapislongrunningoperationsproto.OperationsApi();

var name = "name_example"; // String | The name of the operation resource to be cancelled.

var body = new Googlegolangorggenprotogoogleapislongrunningoperationsproto.LongrunningCancelOperationRequest(); // LongrunningCancelOperationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelOperation(name, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the operation resource to be cancelled. | 
 **body** | [**LongrunningCancelOperationRequest**](LongrunningCancelOperationRequest.md)|  | 

### Return type

[**ProtobufEmpty**](ProtobufEmpty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteOperation"></a>
# **deleteOperation**
> ProtobufEmpty deleteOperation(name)

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn&#39;t support this method, it returns &#x60;google.rpc.Code.UNIMPLEMENTED&#x60;.

### Example
```javascript
var Googlegolangorggenprotogoogleapislongrunningoperationsproto = require('googlegolangorggenprotogoogleapislongrunningoperationsproto');

var apiInstance = new Googlegolangorggenprotogoogleapislongrunningoperationsproto.OperationsApi();

var name = "name_example"; // String | The name of the operation resource to be deleted.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteOperation(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the operation resource to be deleted. | 

### Return type

[**ProtobufEmpty**](ProtobufEmpty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getOperation"></a>
# **getOperation**
> LongrunningOperation getOperation(name)

Gets the latest state of a long-running operation.  Clients can use this method to poll the operation result at intervals as recommended by the API service.

### Example
```javascript
var Googlegolangorggenprotogoogleapislongrunningoperationsproto = require('googlegolangorggenprotogoogleapislongrunningoperationsproto');

var apiInstance = new Googlegolangorggenprotogoogleapislongrunningoperationsproto.OperationsApi();

var name = "name_example"; // String | The name of the operation resource.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getOperation(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the operation resource. | 

### Return type

[**LongrunningOperation**](LongrunningOperation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

