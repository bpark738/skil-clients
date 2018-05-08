/* 
 * Predict
 *
 * Endpoints API for classification and other prediction services in SKIL
 *
 * OpenAPI spec version: 1.0.3
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using IO.Swagger.Client;
using IO.Swagger.Api;
using IO.Swagger.Model;

namespace IO.Swagger.Test
{
    /// <summary>
    ///  Class for testing DefaultApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class DefaultApiTests
    {
        private DefaultApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new DefaultApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of DefaultApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' DefaultApi
            //Assert.IsInstanceOfType(typeof(DefaultApi), instance, "instance is a DefaultApi");
        }

        
        /// <summary>
        /// Test Classify
        /// </summary>
        [Test]
        public void ClassifyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Prediction body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Classify(body, deploymentName, modelName);
            //Assert.IsInstanceOf<ClassificationResult> (response, "response is ClassificationResult");
        }
        
        /// <summary>
        /// Test Classifyarray
        /// </summary>
        [Test]
        public void ClassifyarrayTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Prediction body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Classifyarray(body, deploymentName, modelName);
            //Assert.IsInstanceOf<Base64NDArrayBody> (response, "response is Base64NDArrayBody");
        }
        
        /// <summary>
        /// Test Jsonarray
        /// </summary>
        [Test]
        public void JsonarrayTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Prediction body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Jsonarray(body, deploymentName, modelName);
            //Assert.IsInstanceOf<JsonArrayResponse> (response, "response is JsonArrayResponse");
        }
        
        /// <summary>
        /// Test Logfilepath
        /// </summary>
        [Test]
        public void LogfilepathTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Logfilepath(deploymentName, modelName);
            //Assert.IsInstanceOf<string> (response, "response is string");
        }
        
        /// <summary>
        /// Test Logs
        /// </summary>
        [Test]
        public void LogsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //LogRequest body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Logs(body, deploymentName, modelName);
            //Assert.IsInstanceOf<LogBatch> (response, "response is LogBatch");
        }
        
        /// <summary>
        /// Test Modelset
        /// </summary>
        [Test]
        public void ModelsetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string deploymentName = null;
            //string modelName = null;
            //System.IO.Stream file = null;
            //var response = instance.Modelset(deploymentName, modelName, file);
            //Assert.IsInstanceOf<ModelStatus> (response, "response is ModelStatus");
        }
        
        /// <summary>
        /// Test Modelupdate
        /// </summary>
        [Test]
        public void ModelupdateTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string deploymentName = null;
            //string modelName = null;
            //System.IO.Stream file = null;
            //var response = instance.Modelupdate(deploymentName, modelName, file);
            //Assert.IsInstanceOf<ModelStatus> (response, "response is ModelStatus");
        }
        
        /// <summary>
        /// Test Multiclassify
        /// </summary>
        [Test]
        public void MulticlassifyTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Prediction body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Multiclassify(body, deploymentName, modelName);
            //Assert.IsInstanceOf<MultiClassClassificationResult> (response, "response is MultiClassClassificationResult");
        }
        
        /// <summary>
        /// Test Predict
        /// </summary>
        [Test]
        public void PredictTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //Prediction body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Predict(body, deploymentName, modelName);
            //Assert.IsInstanceOf<Prediction> (response, "response is Prediction");
        }
        
        /// <summary>
        /// Test Predictwithpreprocess
        /// </summary>
        [Test]
        public void PredictwithpreprocessTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Predictwithpreprocess(body, deploymentName, modelName);
            //Assert.IsInstanceOf<Prediction> (response, "response is Prediction");
        }
        
        /// <summary>
        /// Test Predictwithpreprocessjson
        /// </summary>
        [Test]
        public void PredictwithpreprocessjsonTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> body = null;
            //string deploymentName = null;
            //string modelName = null;
            //var response = instance.Predictwithpreprocessjson(body, deploymentName, modelName);
            //Assert.IsInstanceOf<JsonArrayResponse> (response, "response is JsonArrayResponse");
        }
        
    }

}