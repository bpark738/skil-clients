# \DefaultApi

All URIs are relative to *https://localhost:9008/endpoints*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classify**](DefaultApi.md#classify) | **Post** /{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
[**classifyarray**](DefaultApi.md#classifyarray) | **Post** /{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
[**jsonarray**](DefaultApi.md#jsonarray) | **Post** /{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
[**logfilepath**](DefaultApi.md#logfilepath) | **Get** /{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
[**logs**](DefaultApi.md#logs) | **Post** /{deploymentName}/model/{modelName}/default/logs | Get logs
[**modelset**](DefaultApi.md#modelset) | **Post** /{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
[**modelupdate**](DefaultApi.md#modelupdate) | **Post** /{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
[**multiclassify**](DefaultApi.md#multiclassify) | **Post** /{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
[**predict**](DefaultApi.md#predict) | **Post** /{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
[**predictwithpreprocess**](DefaultApi.md#predictwithpreprocess) | **Post** /{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
[**predictwithpreprocessjson**](DefaultApi.md#predictwithpreprocessjson) | **Post** /{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse


# **classify**
> ::models::ClassificationResult classify(body, deployment_name, model_name)
Use the deployed model to classify the input

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::ClassificationResult**](ClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **classifyarray**
> ::models::Base64NdArrayBody classifyarray(body, deployment_name, model_name)
Same as /classify but returns the output as Base64NDArrayBody

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::Base64NdArrayBody**](Base64NDArrayBody.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jsonarray**
> ::models::JsonArrayResponse jsonarray(body, deployment_name, model_name)
Run inference on the input and returns it as a JsonArrayResponse

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logfilepath**
> String logfilepath(deployment_name, model_name)
Get logs file path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **logs**
> ::models::LogBatch logs(body, deployment_name, model_name)
Get logs

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**LogRequest**](LogRequest.md)| the the log request | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::LogBatch**](LogBatch.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modelset**
> ::models::ModelStatus modelset(deployment_name, model_name, optional)
Set the model to be served

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to upload (.pb file) | 

### Return type

[**::models::ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modelupdate**
> ::models::ModelStatus modelupdate(deployment_name, model_name, optional)
Update the model to be served

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 
 **optional** | **map[string]interface{}** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a map[string]interface{}.

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to update with (.pb file) | 

### Return type

[**::models::ModelStatus**](ModelStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **multiclassify**
> ::models::MultiClassClassificationResult multiclassify(body, deployment_name, model_name)
Represents all of the labels for a given classification

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::MultiClassClassificationResult**](MultiClassClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predict**
> ::models::Prediction predict(body, deployment_name, model_name)
Run inference on the input array.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | [**Prediction**](Prediction.md)| The input NDArray | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictwithpreprocess**
> ::models::Prediction predictwithpreprocess(body, deployment_name, model_name)
Preprocesses the input and run inference on it

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | **Vec&lt;String&gt;**| The input array | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **predictwithpreprocessjson**
> ::models::JsonArrayResponse predictwithpreprocessjson(body, deployment_name, model_name)
Preprocesses the input and run inference on it and returns it as a JsonArrayResponse

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
  **body** | **Vec&lt;String&gt;**| The input array | 
  **deployment_name** | **String**| Name of the deployment group | 
  **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**::models::JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
