# coding: utf-8

"""
    Predict

    Endpoints API for classification and other prediction services in SKIL  # noqa: E501

    OpenAPI spec version: 1.0.3
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import skil_client
from skil_client.api.default_api import DefaultApi  # noqa: E501
from skil_client.rest import ApiException


class TestDefaultApi(unittest.TestCase):
    """DefaultApi unit test stubs"""

    def setUp(self):
        self.api = skil_client.api.default_api.DefaultApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_classify(self):
        """Test case for classify

        Use the deployed model to classify the input  # noqa: E501
        """
        pass

    def test_classifyarray(self):
        """Test case for classifyarray

        Same as /classify but returns the output as Base64NDArrayBody  # noqa: E501
        """
        pass

    def test_classifyimage(self):
        """Test case for classifyimage

        Use the deployed model to classify the input, using input image file from multipart form data.  # noqa: E501
        """
        pass

    def test_jsonarray(self):
        """Test case for jsonarray

        Run inference on the input and returns it as a JsonArrayResponse  # noqa: E501
        """
        pass

    def test_logfilepath(self):
        """Test case for logfilepath

        Get logs file path  # noqa: E501
        """
        pass

    def test_logs(self):
        """Test case for logs

        Get logs  # noqa: E501
        """
        pass

    def test_modelset(self):
        """Test case for modelset

        Set the model to be served  # noqa: E501
        """
        pass

    def test_modelupdate(self):
        """Test case for modelupdate

        Update the model to be served  # noqa: E501
        """
        pass

    def test_multiclassify(self):
        """Test case for multiclassify

        Represents all of the labels for a given classification  # noqa: E501
        """
        pass

    def test_predict(self):
        """Test case for predict

        Run inference on the input array.  # noqa: E501
        """
        pass

    def test_predict_0(self):
        """Test case for predict_0

        Run inference on the input array, using input image file from multipart form data.  # noqa: E501
        """
        pass

    def test_predictwithpreprocess(self):
        """Test case for predictwithpreprocess

        Preprocesses the input and run inference on it  # noqa: E501
        """
        pass

    def test_predictwithpreprocessjson(self):
        """Test case for predictwithpreprocessjson

        Preprocesses the input and run inference on it and returns it as a JsonArrayResponse  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
