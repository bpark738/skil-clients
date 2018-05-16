# DefaultApi

All URIs are relative to *https://localhost:9008*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classify**](DefaultApi.md#classify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
[**classifyarray**](DefaultApi.md#classifyarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
[**classifyimage**](DefaultApi.md#classifyimage) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyimage | Use the deployed model to classify the input, using input image file from multipart form data.
[**jsonarray**](DefaultApi.md#jsonarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
[**logfilepath**](DefaultApi.md#logfilepath) | **GET** /endpoints/{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
[**logs**](DefaultApi.md#logs) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/logs | Get logs
[**modelset**](DefaultApi.md#modelset) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
[**modelupdate**](DefaultApi.md#modelupdate) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
[**multiclassify**](DefaultApi.md#multiclassify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
[**predict**](DefaultApi.md#predict) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
[**predict_0**](DefaultApi.md#predict_0) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictimage | Run inference on the input array, using input image file from multipart form data.
[**predictwithpreprocess**](DefaultApi.md#predictwithpreprocess) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
[**predictwithpreprocessjson**](DefaultApi.md#predictwithpreprocessjson) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse
[**upload**](DefaultApi.md#upload) | **POST** /api/upload/model | Upload a model file to SKIL for import.


<a name="classify"></a>
# **classify**
> ClassificationResult classify(body, deploymentName, modelName)

Use the deployed model to classify the input

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Prediction body = new Prediction(); // Prediction | The input NDArray
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    ClassificationResult result = apiInstance.classify(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#classify");
    e.printStackTrace();
}
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
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Prediction body = new Prediction(); // Prediction | The input NDArray
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    Base64NDArrayBody result = apiInstance.classifyarray(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#classifyarray");
    e.printStackTrace();
}
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

<a name="classifyimage"></a>
# **classifyimage**
> ClassificationResult classifyimage(deploymentName, modelName, image)

Use the deployed model to classify the input, using input image file from multipart form data.

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
File image = new File("/path/to/file.txt"); // File | The file to upload.
try {
    ClassificationResult result = apiInstance.classifyimage(deploymentName, modelName, image);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#classifyimage");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group |
 **modelName** | **String**| ID or name of the deployed model |
 **image** | **File**| The file to upload. | [optional]

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="jsonarray"></a>
# **jsonarray**
> JsonArrayResponse jsonarray(body, deploymentName, modelName)

Run inference on the input and returns it as a JsonArrayResponse

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Prediction body = new Prediction(); // Prediction | The input NDArray
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    JsonArrayResponse result = apiInstance.jsonarray(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jsonarray");
    e.printStackTrace();
}
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
> String logfilepath(deploymentName, modelName)

Get logs file path

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    String result = apiInstance.logfilepath(deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#logfilepath");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group |
 **modelName** | **String**| ID or name of the deployed model |

### Return type

**String**

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
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
LogRequest body = new LogRequest(); // LogRequest | the the log request
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    LogBatch result = apiInstance.logs(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#logs");
    e.printStackTrace();
}
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
> ModelStatus modelset(deploymentName, modelName, file)

Set the model to be served

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
File file = new File("/path/to/file.txt"); // File | The model file to upload (.pb file)
try {
    ModelStatus result = apiInstance.modelset(deploymentName, modelName, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#modelset");
    e.printStackTrace();
}
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
> ModelStatus modelupdate(deploymentName, modelName, file)

Update the model to be served

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
File file = new File("/path/to/file.txt"); // File | The model file to update with (.pb file)
try {
    ModelStatus result = apiInstance.modelupdate(deploymentName, modelName, file);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#modelupdate");
    e.printStackTrace();
}
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
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Prediction body = new Prediction(); // Prediction | The input NDArray
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    MultiClassClassificationResult result = apiInstance.multiclassify(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#multiclassify");
    e.printStackTrace();
}
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
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
Prediction body = new Prediction(); // Prediction | The input NDArray
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    Prediction result = apiInstance.predict(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#predict");
    e.printStackTrace();
}
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

<a name="predict_0"></a>
# **predict_0**
> Prediction predict_0(deploymentName, modelName, image)

Run inference on the input array, using input image file from multipart form data.

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
File image = new File("/path/to/file.txt"); // File | The file to upload.
try {
    Prediction result = apiInstance.predict_0(deploymentName, modelName, image);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#predict_0");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentName** | **String**| Name of the deployment group |
 **modelName** | **String**| ID or name of the deployed model |
 **image** | **File**| The file to upload. | [optional]

### Return type

[**Prediction**](Prediction.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="predictwithpreprocess"></a>
# **predictwithpreprocess**
> Prediction predictwithpreprocess(body, deploymentName, modelName)

Preprocesses the input and run inference on it

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> body = Arrays.asList(new List<String>()); // List<String> | The input array
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    Prediction result = apiInstance.predictwithpreprocess(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#predictwithpreprocess");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **List&lt;String&gt;**| The input array |
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
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
List<String> body = Arrays.asList(new List<String>()); // List<String> | The input array
String deploymentName = "deploymentName_example"; // String | Name of the deployment group
String modelName = "modelName_example"; // String | ID or name of the deployed model
try {
    JsonArrayResponse result = apiInstance.predictwithpreprocessjson(body, deploymentName, modelName);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#predictwithpreprocessjson");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **List&lt;String&gt;**| The input array |
 **deploymentName** | **String**| Name of the deployment group |
 **modelName** | **String**| ID or name of the deployed model |

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="upload"></a>
# **upload**
> upload(file)

Upload a model file to SKIL for import.

### Example
```java
// Import classes:
//import ai.skymind.ApiException;
//import ai.skymind.skil.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
File file = new File("/path/to/file.txt"); // File | The file to upload.
try {
    apiInstance.upload(file);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#upload");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to upload. | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

