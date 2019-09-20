# Uwebv1uwebproto.RootApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNodes**](RootApi.md#getNodes) | **GET** /uweb/v1/root/nodes | 树结构
[**listNodes**](RootApi.md#listNodes) | **GET** /uweb/v1/root/nodes:list | 平铺列表


<a name="getNodes"></a>
# **getNodes**
> V1GetNodesResponse getNodes()

树结构

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.RootApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNodes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1GetNodesResponse**](V1GetNodesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listNodes"></a>
# **listNodes**
> V1ListNodesResponse listNodes()

平铺列表

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.RootApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listNodes(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1ListNodesResponse**](V1ListNodesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

