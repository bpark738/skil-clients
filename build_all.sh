#!/bin/bash

# java
swagger-codegen generate -i swagger.yaml -l java -o java -c config/java.json

# python
swagger-codegen generate -i swagger.yaml -l python -o python -c config/python.json

# javascript
swagger-codegen generate -i swagger.yaml -l javascript -o javascript -c config/javascript.json

# ruby
swagger-codegen generate -i swagger.yaml -l ruby -o ruby -c config/ruby.json

# go
swagger-codegen generate -i swagger.yaml -l go -o go -c config/go.json

# scala
swagger-codegen generate -i swagger.yaml -l scala -o scala -c config/scala.json

# csharp
swagger-codegen generate -i swagger.yaml -l csharp -o csharp -c config/csharp.json

# rust
swagger-codegen generate -i swagger.yaml -l rust -o rust -c config/rust.json