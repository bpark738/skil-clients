# SkilCient::DefaultApi

All URIs are relative to *https://localhost:9008*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classify**](DefaultApi.md#classify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
[**classifyarray**](DefaultApi.md#classifyarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
[**classifyimage**](DefaultApi.md#classifyimage) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyimage | Use the deployed model to classify the input, using input image file from multipart form data.
[**deploy_model**](DefaultApi.md#deploy_model) | **POST** /deployment/{deploymentId}/model | Deploy a model in a deployment group.
[**deployment_create**](DefaultApi.md#deployment_create) | **POST** /deployment | Create a new deployment group.
[**jsonarray**](DefaultApi.md#jsonarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
[**logfilepath**](DefaultApi.md#logfilepath) | **GET** /endpoints/{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
[**login**](DefaultApi.md#login) | **POST** /login | Post JSON credentials and obtain a JWT authorization token.
[**logs**](DefaultApi.md#logs) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/logs | Get logs
[**modelset**](DefaultApi.md#modelset) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
[**modelupdate**](DefaultApi.md#modelupdate) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
[**multiclassify**](DefaultApi.md#multiclassify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
[**predict**](DefaultApi.md#predict) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
[**predictimage**](DefaultApi.md#predictimage) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictimage | Run inference on the input array, using input image file from multipart form data.
[**predictwithpreprocess**](DefaultApi.md#predictwithpreprocess) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
[**predictwithpreprocessjson**](DefaultApi.md#predictwithpreprocessjson) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse
[**upload**](DefaultApi.md#upload) | **POST** /api/upload/model | Upload a model file to SKIL for import.


# **classify**
> ClassificationResult classify(body, deployment_name, model_name)

Use the deployed model to classify the input

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::Prediction.new # Prediction | The input NDArray

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Use the deployed model to classify the input
  result = api_instance.classify(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->classify: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **classifyarray**
> Base64NDArrayBody classifyarray(body, deployment_name, model_name)

Same as /classify but returns the output as Base64NDArrayBody

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::Prediction.new # Prediction | The input NDArray

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Same as /classify but returns the output as Base64NDArrayBody
  result = api_instance.classifyarray(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->classifyarray: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**Base64NDArrayBody**](Base64NDArrayBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **classifyimage**
> ClassificationResult classifyimage(deployment_name, model_name, opts)

Use the deployed model to classify the input, using input image file from multipart form data.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model

opts = { 
  image: File.new("/path/to/file.txt") # File | The file to upload.
}

begin
  #Use the deployed model to classify the input, using input image file from multipart form data.
  result = api_instance.classifyimage(deployment_name, model_name, opts)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->classifyimage: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **image** | **File**| The file to upload. | [optional] 

### Return type

[**ClassificationResult**](ClassificationResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **deploy_model**
> Object deploy_model(deployment_id, body)

Deploy a model in a deployment group.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_id = "deployment_id_example" # String | ID deployment group

body = SkilCient::DeployModel.new # DeployModel | the deployment request


begin
  #Deploy a model in a deployment group.
  result = api_instance.deploy_model(deployment_id, body)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->deploy_model: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_id** | **String**| ID deployment group | 
 **body** | [**DeployModel**](DeployModel.md)| the deployment request | 

### Return type

**Object**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **deployment_create**
> Deployment deployment_create(body)

Create a new deployment group.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::NewDeployment.new # NewDeployment | the deployment request


begin
  #Create a new deployment group.
  result = api_instance.deployment_create(body)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->deployment_create: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewDeployment**](NewDeployment.md)| the deployment request | 

### Return type

[**Deployment**](Deployment.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jsonarray**
> JsonArrayResponse jsonarray(body, deployment_name, model_name)

Run inference on the input and returns it as a JsonArrayResponse

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::Prediction.new # Prediction | The input NDArray

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Run inference on the input and returns it as a JsonArrayResponse
  result = api_instance.jsonarray(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->jsonarray: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **logfilepath**
> String logfilepath(deployment_name, model_name)

Get logs file path

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Get logs file path
  result = api_instance.logfilepath(deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->logfilepath: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

**String**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text



# **login**
> Token login(credentials)

Post JSON credentials and obtain a JWT authorization token.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

credentials = SkilCient::Credentials.new # Credentials | Login credentials.


begin
  #Post JSON credentials and obtain a JWT authorization token.
  result = api_instance.login(credentials)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->login: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credentials** | [**Credentials**](Credentials.md)| Login credentials. | 

### Return type

[**Token**](Token.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **logs**
> LogBatch logs(body, deployment_name, model_name)

Get logs

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::LogRequest.new # LogRequest | the the log request

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Get logs
  result = api_instance.logs(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->logs: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LogRequest**](LogRequest.md)| the the log request | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**LogBatch**](LogBatch.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **modelset**
> ModelStatus modelset(deployment_name, model_name, opts)

Set the model to be served

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model

opts = { 
  file: File.new("/path/to/file.txt") # File | The model file to upload (.pb file)
}

begin
  #Set the model to be served
  result = api_instance.modelset(deployment_name, model_name, opts)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->modelset: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to upload (.pb file) | [optional] 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **modelupdate**
> ModelStatus modelupdate(deployment_name, model_name, opts)

Update the model to be served

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model

opts = { 
  file: File.new("/path/to/file.txt") # File | The model file to update with (.pb file)
}

begin
  #Update the model to be served
  result = api_instance.modelupdate(deployment_name, model_name, opts)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->modelupdate: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **file** | **File**| The model file to update with (.pb file) | [optional] 

### Return type

[**ModelStatus**](ModelStatus.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **multiclassify**
> MultiClassClassificationResult multiclassify(body, deployment_name, model_name)

Represents all of the labels for a given classification

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::Prediction.new # Prediction | The input NDArray

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Represents all of the labels for a given classification
  result = api_instance.multiclassify(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->multiclassify: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**MultiClassClassificationResult**](MultiClassClassificationResult.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **predict**
> Prediction predict(body, deployment_name, model_name)

Run inference on the input array.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = SkilCient::Prediction.new # Prediction | The input NDArray

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Run inference on the input array.
  result = api_instance.predict(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->predict: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Prediction**](Prediction.md)| The input NDArray | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **predictimage**
> Prediction predictimage(deployment_name, model_name, opts)

Run inference on the input array, using input image file from multipart form data.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model

opts = { 
  image: File.new("/path/to/file.txt") # File | The file to upload.
}

begin
  #Run inference on the input array, using input image file from multipart form data.
  result = api_instance.predictimage(deployment_name, model_name, opts)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->predictimage: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 
 **image** | **File**| The file to upload. | [optional] 

### Return type

[**Prediction**](Prediction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



# **predictwithpreprocess**
> Prediction predictwithpreprocess(body, deployment_name, model_name)

Preprocesses the input and run inference on it

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = [SkilCient::Array<String>.new] # Array<String> | The input array

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Preprocesses the input and run inference on it
  result = api_instance.predictwithpreprocess(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->predictwithpreprocess: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array&lt;String&gt;**| The input array | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**Prediction**](Prediction.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **predictwithpreprocessjson**
> JsonArrayResponse predictwithpreprocessjson(body, deployment_name, model_name)

Preprocesses the input and run inference on it and returns it as a JsonArrayResponse

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

body = [SkilCient::Array<String>.new] # Array<String> | The input array

deployment_name = "deployment_name_example" # String | Name of the deployment group

model_name = "model_name_example" # String | ID or name of the deployed model


begin
  #Preprocesses the input and run inference on it and returns it as a JsonArrayResponse
  result = api_instance.predictwithpreprocessjson(body, deployment_name, model_name)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->predictwithpreprocessjson: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Array&lt;String&gt;**| The input array | 
 **deployment_name** | **String**| Name of the deployment group | 
 **model_name** | **String**| ID or name of the deployed model | 

### Return type

[**JsonArrayResponse**](JsonArrayResponse.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **upload**
> FileUploadList upload(opts)

Upload a model file to SKIL for import.

### Example
```ruby
# load the gem
require 'skil_client'
# setup authorization
SkilCient.configure do |config|
  # Configure API key authorization: api_key
  config.api_key['authorization'] = 'YOUR API KEY'
  # Uncomment the following line to set a prefix for the API key, e.g. 'Bearer' (defaults to nil)
  #config.api_key_prefix['authorization'] = 'Bearer'
end

api_instance = SkilCient::DefaultApi.new

opts = { 
  file: File.new("/path/to/file.txt") # File | The file to upload.
}

begin
  #Upload a model file to SKIL for import.
  result = api_instance.upload(opts)
  p result
rescue SkilCient::ApiError => e
  puts "Exception when calling DefaultApi->upload: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **File**| The file to upload. | [optional] 

### Return type

[**FileUploadList**](FileUploadList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json



