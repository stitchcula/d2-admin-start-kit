# Uwebv1uwebproto.MsshApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLink**](MsshApi.md#createLink) | **POST** /uweb/v1/mssh/links | 
[**deleteLink**](MsshApi.md#deleteLink) | **DELETE** /uweb/v1/mssh/links/{guid} | 
[**getLink**](MsshApi.md#getLink) | **GET** /uweb/v1/mssh/links/{guid} | 树结构
[**listLinks**](MsshApi.md#listLinks) | **GET** /uweb/v1/mssh/links:list | 平铺列表
[**updateLink**](MsshApi.md#updateLink) | **PATCH** /uweb/v1/mssh/links/{link.guid} | 


<a name="createLink"></a>
# **createLink**
> V1SSHLink createLink(body)



### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.MsshApi();

var body = new Uwebv1uwebproto.V1SSHLink(); // V1SSHLink | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLink(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1SSHLink**](V1SSHLink.md)|  | 

### Return type

[**V1SSHLink**](V1SSHLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteLink"></a>
# **deleteLink**
> ProtobufEmpty deleteLink(guid)



### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.MsshApi();

var guid = "guid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteLink(guid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**|  | 

### Return type

[**ProtobufEmpty**](ProtobufEmpty.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLink"></a>
# **getLink**
> V1SSHLink getLink(guid)

树结构

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.MsshApi();

var guid = "guid_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLink(guid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **String**|  | 

### Return type

[**V1SSHLink**](V1SSHLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listLinks"></a>
# **listLinks**
> V1ListLinksResponse listLinks()

平铺列表

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.MsshApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listLinks(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1ListLinksResponse**](V1ListLinksResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLink"></a>
# **updateLink**
> V1SSHLink updateLink(linkGuid, body)



### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.MsshApi();

var linkGuid = "linkGuid_example"; // String | 

var body = new Uwebv1uwebproto.V1SSHLink(); // V1SSHLink | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLink(linkGuid, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkGuid** | **String**|  | 
 **body** | [**V1SSHLink**](V1SSHLink.md)|  | 

### Return type

[**V1SSHLink**](V1SSHLink.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

