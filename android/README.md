# skil-client

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>ai.skymind</groupId>
    <artifactId>skil-client</artifactId>
    <version>1.0.3-1</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "ai.skymind:skil-client:1.0.3-1"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/skil-client-1.0.3-1.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import ai.skymind.skil.DefaultApi;

public class DefaultApiExample {

    public static void main(String[] args) {
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
    }
}

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


## Documentation for Models

 - [Base64NDArrayBody](docs/Base64NDArrayBody.md)
 - [ClassificationResult](docs/ClassificationResult.md)
 - [INDArray](docs/INDArray.md)
 - [JsonArrayResponse](docs/JsonArrayResponse.md)
 - [LogBatch](docs/LogBatch.md)
 - [LogRequest](docs/LogRequest.md)
 - [ModelStatus](docs/ModelStatus.md)
 - [MultiClassClassificationResult](docs/MultiClassClassificationResult.md)
 - [Prediction](docs/Prediction.md)


## Documentation for Authorization

Authentication schemes defined for the API:
### Bearer

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



