# skil-client
Endpoints API for classification and other prediction services in SKIL

This Python package is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.3
- Package version: 1.0.3-1
- Build package: io.swagger.codegen.languages.PythonClientCodegen

## Requirements.

Python 2.7 and 3.4+

## Installation & Usage
### pip install

If the python package is hosted on Github, you can install directly from Github

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import skil_client 
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import skil_client
```

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python
from __future__ import print_function
import time
import skil_client
from skil_client.rest import ApiException
from pprint import pprint
# create an instance of the API class
api_instance = skil_client.DefaultApi()
body = skil_client.Prediction() # Prediction | The input NDArray
deployment_name = 'deployment_name_example' # str | Name of the deployment group
model_name = 'model_name_example' # str | ID or name of the deployed model

try:
    # Use the deployed model to classify the input
    api_response = api_instance.classify(body, deployment_name, model_name)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->classify: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://localhost:9008/endpoints*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**classify**](docs/DefaultApi.md#classify) | **POST** /{deploymentName}/model/{modelName}/default/classify | Use the deployed model to classify the input
*DefaultApi* | [**classifyarray**](docs/DefaultApi.md#classifyarray) | **POST** /{deploymentName}/model/{modelName}/default/classifyarray | Same as /classify but returns the output as Base64NDArrayBody
*DefaultApi* | [**jsonarray**](docs/DefaultApi.md#jsonarray) | **POST** /{deploymentName}/model/{modelName}/default/jsonarray | Run inference on the input and returns it as a JsonArrayResponse
*DefaultApi* | [**logfilepath**](docs/DefaultApi.md#logfilepath) | **GET** /{deploymentName}/model/{modelName}/default/logfilepath | Get logs file path
*DefaultApi* | [**logs**](docs/DefaultApi.md#logs) | **POST** /{deploymentName}/model/{modelName}/default/logs | Get logs
*DefaultApi* | [**modelset**](docs/DefaultApi.md#modelset) | **POST** /{deploymentName}/model/{modelName}/default/modelset | Set the model to be served
*DefaultApi* | [**modelupdate**](docs/DefaultApi.md#modelupdate) | **POST** /{deploymentName}/model/{modelName}/default/modelupdate | Update the model to be served
*DefaultApi* | [**multiclassify**](docs/DefaultApi.md#multiclassify) | **POST** /{deploymentName}/model/{modelName}/default/multiclassify | Represents all of the labels for a given classification
*DefaultApi* | [**predict**](docs/DefaultApi.md#predict) | **POST** /{deploymentName}/model/{modelName}/default/predict | Run inference on the input array.
*DefaultApi* | [**predictwithpreprocess**](docs/DefaultApi.md#predictwithpreprocess) | **POST** /{deploymentName}/model/{modelName}/default/predictwithpreprocess | Preprocesses the input and run inference on it
*DefaultApi* | [**predictwithpreprocessjson**](docs/DefaultApi.md#predictwithpreprocessjson) | **POST** /{deploymentName}/model/{modelName}/default/predictwithpreprocessjson | Preprocesses the input and run inference on it and returns it as a JsonArrayResponse


## Documentation For Models

 - [Base64NDArrayBody](docs/Base64NDArrayBody.md)
 - [ClassificationResult](docs/ClassificationResult.md)
 - [INDArray](docs/INDArray.md)
 - [JsonArrayResponse](docs/JsonArrayResponse.md)
 - [LogBatch](docs/LogBatch.md)
 - [LogRequest](docs/LogRequest.md)
 - [ModelStatus](docs/ModelStatus.md)
 - [MultiClassClassificationResult](docs/MultiClassClassificationResult.md)
 - [Prediction](docs/Prediction.md)


## Documentation For Authorization


## Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Author


