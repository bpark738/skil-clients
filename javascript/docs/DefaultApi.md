# SkilClient.DefaultApi

All URIs are relative to *https://localhost:9008/endpoints*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classify**](DefaultApi.md#classify) | **POST** /{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
[**classifyarray**](DefaultApi.md#classifyarray) | **POST** /{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
[**jsonarray**](DefaultApi.md#jsonarray) | **POST** /{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
[**logfilepath**](DefaultApi.md#logfilepath) | **GET** /{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
[**logs**](DefaultApi.md#logs) | **POST** /{deploymentName}/model/{modelName}/default/logs | Get logs
[**modelset**](DefaultApi.md#modelset) | **POST** /{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
[**modelupdate**](DefaultApi.md#modelupdate) | **POST** /{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
[**multiclassify**](DefaultApi.md#multiclassify) | **POST** /{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
[**predict**](DefaultApi.md#predict) | **POST** /{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
[**predictwithpreprocess**](DefaultApi.md#predictwithpreprocess) | **POST** /{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
[**predictwithpreprocessjson**](DefaultApi.md#predictwithpreprocessjson) | **POST** /{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse


<a name="classify"></a>
# **classify**
> ClassificationResult classify(body, deploymentName, modelName)

Use the deployed model to classify the input

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.Prediction(); // Prediction | The input NDArray

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classify(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="classifyarray"></a>
# **classifyarray**
> Base64NDArrayBody classifyarray(body, deploymentName, modelName)

Same as /classify but returns the output as Base64NDArrayBody

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.Prediction(); // Prediction | The input NDArray

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classifyarray(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**Base64NDArrayBody**](Base64NDArrayBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jsonarray"></a>
# **jsonarray**
> JsonArrayResponse jsonarray(body, deploymentName, modelName)

Run inference on the input and returns it as a JsonArrayResponse

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.Prediction(); // Prediction | The input NDArray

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jsonarray(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logfilepath"></a>
# **logfilepath**
> &#39;String&#39; logfilepath(deploymentName, modelName)

Get logs file path

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logfilepath(deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text

<a name="logs"></a>
# **logs**
> LogBatch logs(body, deploymentName, modelName)

Get logs

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.LogRequest(); // LogRequest | the the log request

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.logs(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LogRequest**](LogRequest.md)| the the log request | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**LogBatch**](LogBatch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modelset"></a>
# **modelset**
> ModelStatus modelset(deploymentName, modelName, opts)

Set the model to be served

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model

var opts = { 
  'file': "/path/to/file.txt" // File | The model file to upload (.pb file)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modelset(deploymentName, modelName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to upload (.pb file) | [optional] 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="modelupdate"></a>
# **modelupdate**
> ModelStatus modelupdate(deploymentName, modelName, opts)

Update the model to be served

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model

var opts = { 
  'file': "/path/to/file.txt" // File | The model file to update with (.pb file)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.modelupdate(deploymentName, modelName, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to update with (.pb file) | [optional] 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="multiclassify"></a>
# **multiclassify**
> MultiClassClassificationResult multiclassify(body, deploymentName, modelName)

Represents all of the labels for a given classification

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.Prediction(); // Prediction | The input NDArray

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.multiclassify(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**MultiClassClassificationResult**](MultiClassClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predict"></a>
# **predict**
> Prediction predict(body, deploymentName, modelName)

Run inference on the input array.

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = new SkilClient.Prediction(); // Prediction | The input NDArray

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.predict(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictwithpreprocess"></a>
# **predictwithpreprocess**
> Prediction predictwithpreprocess(body, deploymentName, modelName)

Preprocesses the input and run inference on it

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = [new SkilClient.[String]()]; // [String] | The input array

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.predictwithpreprocess(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **[String]**| The input array | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="predictwithpreprocessjson"></a>
# **predictwithpreprocessjson**
> JsonArrayResponse predictwithpreprocessjson(body, deploymentName, modelName)

Preprocesses the input and run inference on it and returns it as a JsonArrayResponse

### Example
```javascript
var SkilClient = require('skil-client');

var apiInstance = new SkilClient.DefaultApi();

var body = [new SkilClient.[String]()]; // [String] | The input array

var deploymentName = "deploymentName_example"; // String | Name of the deployment group

var modelName = "modelName_example"; // String | ID or name of the deployed model


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.predictwithpreprocessjson(body, deploymentName, modelName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **[String]**| The input array | 
 **deploymentName** | **String**| Name of the deployment group | 
 **modelName** | **String**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
