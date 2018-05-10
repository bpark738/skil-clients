# \DefaultApi

All URIs are relative to *https://localhost:9008/endpoints*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Classify**](DefaultApi.md#Classify) | **Post** /{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
[**Classifyarray**](DefaultApi.md#Classifyarray) | **Post** /{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
[**Classifyimage**](DefaultApi.md#Classifyimage) | **Post** /{deploymentName}/model/{modelName}/default/classifyimage | Use the deployed model to classify the input, using input image file from multipart form data.
[**Jsonarray**](DefaultApi.md#Jsonarray) | **Post** /{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
[**Logfilepath**](DefaultApi.md#Logfilepath) | **Get** /{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
[**Logs**](DefaultApi.md#Logs) | **Post** /{deploymentName}/model/{modelName}/default/logs | Get logs
[**Modelset**](DefaultApi.md#Modelset) | **Post** /{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
[**Modelupdate**](DefaultApi.md#Modelupdate) | **Post** /{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
[**Multiclassify**](DefaultApi.md#Multiclassify) | **Post** /{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
[**Predict**](DefaultApi.md#Predict) | **Post** /{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
[**Predict_0**](DefaultApi.md#Predict_0) | **Post** /{deploymentName}/model/{modelName}/default/predictimage | Run inference on the input array, using input image file from multipart form data.
[**Predictwithpreprocess**](DefaultApi.md#Predictwithpreprocess) | **Post** /{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
[**Predictwithpreprocessjson**](DefaultApi.md#Predictwithpreprocessjson) | **Post** /{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse


# **Classify**
> ClassificationResult Classify(ctx, body, deploymentName, modelName)
Use the deployed model to classify the input

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Classifyarray**
> Base64NdArrayBody Classifyarray(ctx, body, deploymentName, modelName)
Same as /classify but returns the output as Base64NDArrayBody

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**Base64NdArrayBody**](Base64NDArrayBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Classifyimage**
> ClassificationResult Classifyimage(ctx, deploymentName, modelName, optional)
Use the deployed model to classify the input, using input image file from multipart form data.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **string**| Name of the deployment group | 
 **modelName** | **string**| ID or name of the deployed model | 
 **image** | ***os.File**| The file to upload. | 

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Jsonarray**
> JsonArrayResponse Jsonarray(ctx, body, deploymentName, modelName)
Run inference on the input and returns it as a JsonArrayResponse

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Logfilepath**
> string Logfilepath(ctx, deploymentName, modelName)
Get logs file path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Logs**
> LogBatch Logs(ctx, body, deploymentName, modelName)
Get logs

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**LogRequest**](LogRequest.md)| the the log request | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**LogBatch**](LogBatch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Modelset**
> ModelStatus Modelset(ctx, deploymentName, modelName, optional)
Set the model to be served

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **string**| Name of the deployment group | 
 **modelName** | **string**| ID or name of the deployed model | 
 **file** | ***os.File**| The model file to upload (.pb file) | 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Modelupdate**
> ModelStatus Modelupdate(ctx, deploymentName, modelName, optional)
Update the model to be served

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **string**| Name of the deployment group | 
 **modelName** | **string**| ID or name of the deployed model | 
 **file** | ***os.File**| The model file to update with (.pb file) | 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Multiclassify**
> MultiClassClassificationResult Multiclassify(ctx, body, deploymentName, modelName)
Represents all of the labels for a given classification

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**MultiClassClassificationResult**](MultiClassClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Predict**
> Prediction Predict(ctx, body, deploymentName, modelName)
Run inference on the input array.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Predict_0**
> Prediction Predict_0(ctx, deploymentName, modelName, optional)
Run inference on the input array, using input image file from multipart form data.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **string**| Name of the deployment group | 
 **modelName** | **string**| ID or name of the deployed model | 
 **image** | ***os.File**| The file to upload. | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Predictwithpreprocess**
> Prediction Predictwithpreprocess(ctx, body, deploymentName, modelName)
Preprocesses the input and run inference on it

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | **[]string**| The input array | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Predictwithpreprocessjson**
> JsonArrayResponse Predictwithpreprocessjson(ctx, body, deploymentName, modelName)
Preprocesses the input and run inference on it and returns it as a JsonArrayResponse

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | **[]string**| The input array | 
  **deploymentName** | **string**| Name of the deployment group | 
  **modelName** | **string**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

