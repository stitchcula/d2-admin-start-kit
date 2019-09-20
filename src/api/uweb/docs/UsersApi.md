# Uwebv1uwebproto.UsersApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCaptcha**](UsersApi.md#getCaptcha) | **GET** /uweb/v1/users:captcha | 平铺列表
[**login**](UsersApi.md#login) | **POST** /uweb/v1/users:login | 树结构


<a name="getCaptcha"></a>
# **getCaptcha**
> V1GetCaptchaResponse getCaptcha()

平铺列表

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCaptcha(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**V1GetCaptchaResponse**](V1GetCaptchaResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> V1LoginResponse login(body)

树结构

### Example
```javascript
var Uwebv1uwebproto = require('uwebv1uwebproto');

var apiInstance = new Uwebv1uwebproto.UsersApi();

var body = new Uwebv1uwebproto.V1LoginRequest(); // V1LoginRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**V1LoginRequest**](V1LoginRequest.md)|  | 

### Return type

[**V1LoginResponse**](V1LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

