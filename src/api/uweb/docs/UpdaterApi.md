# Uwebv1uwebproto.UpdaterApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTask**](UpdaterApi.md#createTask) | **POST** /uweb/v1/updater/tasks | 树结构
[**getTask**](UpdaterApi.md#getTask) | **GET** /uweb/v1/updater/tasks/{id} | 平铺列表


<a name="createTask"></a>
# **createTask**
> V1UpdateTask createTask(body)

树结构

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.UpdaterApi();

var body = new Uwebv1uwebproto.V1CreateTaskRequest(); // V1CreateTaskRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTask(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1CreateTaskRequest**](V1CreateTaskRequest.md)|  | 

### Return type

[**V1UpdateTask**](V1UpdateTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTask"></a>
# **getTask**
> V1UpdateTask getTask(id)

平铺列表

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.UpdaterApi();

var id = "id_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTask(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**V1UpdateTask**](V1UpdateTask.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

