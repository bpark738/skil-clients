# skil-clients
Clients for using SKIL's HTTP inference API in Java, Python, Javascript, and more.

## Getting Started

Automatically-generated clients are available in each langauge folder in the root of this repository. Clients support SKIL's JWT authentication and currently only work for prediction/inference endpoints.

### Changing the host

The default host in each client is `localhost:9008`. Because your SKIL instance may be running on a different server or port, you can change the host using the following code:

**Java**
```java
URL url = new URL(apiClient.getBasePath());
URL newUrl = new URL(url.getProtocol(), newHost, url.getPort(), url.getFile());
apiClient.setBasePath(newUrl.toString());
```

**Python**
```python
import skil_client

skil_client.host = "http://5.5.5.5:9008/endpoints"
client = skil_client.DefaultApi()
```

## Building the clients

If you want to fork this repository and make custom changes, you can rebuild them by using the **swagger.yaml** file located in the root of this repository. Clients are built using [swagger-codegen](https://github.com/swagger-api/swagger-codegen) and use a langauge-specific configuration file passed in using the `-c` flag.

For example if you have the `swagger-codegen` command installed on your system, you can build a python client by running this command from the root of this directory:

```
swagger-codegen generate -i swagger.yaml -l python -o python -c config/python.json
```