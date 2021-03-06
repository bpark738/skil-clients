# coding: utf-8

"""
    Predict
    Endpoints API for classification and other prediction services in SKIL  # noqa: E501
    OpenAPI spec version: 1.1.0-beta
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import skil_client
from skil_client.models.deploy_model import DeployModel  # noqa: E501
from skil_client.rest import ApiException
from skil_client import ApiClient
from skil_client.configuration import Configuration
from skil_client.api.default_api import DefaultApi
from skil_client.models.new_deployment import NewDeployment
from skil_client.models.token import Token

from pprint import pprint

class TestDeployModel(unittest.TestCase):

    def setUp(self):
        # set configuration
        config = Configuration()
        config.host = "http://localhost:9008"
        config.api_key_prefix['authorization'] = 'Bearer'

        # initialize instance
        api_instance = skil_client.DefaultApi(api_client=ApiClient(configuration=config))

        creds = skil_client.Credentials(user_id="admin", password="admin")
        res = api_instance.login(creds)
        config.api_key['authorization'] = res.to_dict()['token']

        return api_instance

    def tearDown(self):
        pass

    def testDeployModel(self):

        api_instance = self.setUp()

        # existing deployment
        deployment_id = '18' 

        # initialize body
        body = DeployModel(name = "model2", scale = 1,
            uri = ["test/model/model2/default"], model_type = 'model',
            file_location = "file:///var/skil/storage/models/4e44e65a-200e-11e8-8649-000d3a70b2d7.h5")
        
        # generate response
        api_response = api_instance.deploy_model(deployment_id, body)

        pprint(api_response)
        
        self.tearDown()

if __name__ == '__main__':
    unittest.main()