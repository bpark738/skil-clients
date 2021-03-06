# skil_client

SkilCient - the Ruby gem for the Predict

Endpoints API for classification and other prediction services in SKIL

This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.1.0-beta
- Package version: 1.1.0-beta
- Build package: io.swagger.codegen.languages.RubyClientCodegen

## Installation

### Build a gem

To build the Ruby code into a gem:

```shell
gem build skil_client.gemspec
```

Then either install the gem locally:

```shell
gem install ./skil_client-1.1.0-beta.gem
```
(for development, run `gem install --dev ./skil_client-1.1.0-beta.gem` to install the development dependencies)

or publish the gem to a gem hosting service, e.g. [RubyGems](https://rubygems.org/).

Finally add this to the Gemfile:

    gem 'skil_client', '~> 1.1.0-beta'

### Install from Git

If the Ruby gem is hosted at a git repository: https://github.com/GIT_USER_ID/GIT_REPO_ID, then add the following in the Gemfile:

    gem 'skil_client', :git => 'https://github.com/GIT_USER_ID/GIT_REPO_ID.git'

### Include the Ruby code directly

Include the Ruby code directly using `-I` as follows:

```shell
ruby -Ilib script.rb
```

## Getting Started

Please follow the [installation](#installation) procedure and then run the following code:
```ruby
# Load the gem
require 'skil_client'

# Setup authorization
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

## Documentation for API Endpoints

All URIs are relative to *https://localhost:9008*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*SkilCient::DefaultApi* | [**classify**](docs/DefaultApi.md#classify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
*SkilCient::DefaultApi* | [**classifyarray**](docs/DefaultApi.md#classifyarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
*SkilCient::DefaultApi* | [**classifyimage**](docs/DefaultApi.md#classifyimage) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/classifyimage | Use the deployed model to classify the input, using input image file from multipart form data.
*SkilCient::DefaultApi* | [**deploy_model**](docs/DefaultApi.md#deploy_model) | **POST** /deployment/{deploymentId}/model | Deploy a model in a deployment group.
*SkilCient::DefaultApi* | [**deployment_create**](docs/DefaultApi.md#deployment_create) | **POST** /deployment | Create a new deployment group.
*SkilCient::DefaultApi* | [**jsonarray**](docs/DefaultApi.md#jsonarray) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
*SkilCient::DefaultApi* | [**logfilepath**](docs/DefaultApi.md#logfilepath) | **GET** /endpoints/{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
*SkilCient::DefaultApi* | [**login**](docs/DefaultApi.md#login) | **POST** /login | Post JSON credentials and obtain a JWT authorization token.
*SkilCient::DefaultApi* | [**logs**](docs/DefaultApi.md#logs) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/logs | Get logs
*SkilCient::DefaultApi* | [**modelset**](docs/DefaultApi.md#modelset) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
*SkilCient::DefaultApi* | [**modelupdate**](docs/DefaultApi.md#modelupdate) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
*SkilCient::DefaultApi* | [**multiclassify**](docs/DefaultApi.md#multiclassify) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
*SkilCient::DefaultApi* | [**predict**](docs/DefaultApi.md#predict) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
*SkilCient::DefaultApi* | [**predictimage**](docs/DefaultApi.md#predictimage) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictimage | Run inference on the input array, using input image file from multipart form data.
*SkilCient::DefaultApi* | [**predictwithpreprocess**](docs/DefaultApi.md#predictwithpreprocess) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
*SkilCient::DefaultApi* | [**predictwithpreprocessjson**](docs/DefaultApi.md#predictwithpreprocessjson) | **POST** /endpoints/{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse
*SkilCient::DefaultApi* | [**upload**](docs/DefaultApi.md#upload) | **POST** /api/upload/model | Upload a model file to SKIL for import.


## Documentation for Models

 - [SkilCient::Base64NDArrayBody](docs/Base64NDArrayBody.md)
 - [SkilCient::ClassificationResult](docs/ClassificationResult.md)
 - [SkilCient::Credentials](docs/Credentials.md)
 - [SkilCient::DeployModel](docs/DeployModel.md)
 - [SkilCient::Deployment](docs/Deployment.md)
 - [SkilCient::DeploymentObjects](docs/DeploymentObjects.md)
 - [SkilCient::FileUpload](docs/FileUpload.md)
 - [SkilCient::FileUploadList](docs/FileUploadList.md)
 - [SkilCient::INDArray](docs/INDArray.md)
 - [SkilCient::JsonArrayResponse](docs/JsonArrayResponse.md)
 - [SkilCient::LogBatch](docs/LogBatch.md)
 - [SkilCient::LogRequest](docs/LogRequest.md)
 - [SkilCient::ModelStatus](docs/ModelStatus.md)
 - [SkilCient::MultiClassClassificationResult](docs/MultiClassClassificationResult.md)
 - [SkilCient::NewDeployment](docs/NewDeployment.md)
 - [SkilCient::Prediction](docs/Prediction.md)
 - [SkilCient::Token](docs/Token.md)


## Documentation for Authorization


### api_key

- **Type**: API key
- **API key parameter name**: authorization
- **Location**: HTTP header

