# coding: utf-8

"""
    Predict

    Endpoints API for classification and other prediction services in SKIL  # noqa: E501

    OpenAPI spec version: 1.1.0-beta
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class UploadSuccess(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'key': 'str',
        'file_name': 'str',
        'status': 'str',
        'type': 'str',
        'path': 'str',
        'file_content': 'str'
    }

    attribute_map = {
        'key': 'key',
        'file_name': 'fileName',
        'status': 'status',
        'type': 'type',
        'path': 'path',
        'file_content': 'fileContent'
    }

    def __init__(self, key=None, file_name=None, status=None, type=None, path=None, file_content=None):  # noqa: E501
        """UploadSuccess - a model defined in Swagger"""  # noqa: E501

        self._key = None
        self._file_name = None
        self._status = None
        self._type = None
        self._path = None
        self._file_content = None
        self.discriminator = None

        if key is not None:
            self.key = key
        if file_name is not None:
            self.file_name = file_name
        if status is not None:
            self.status = status
        if type is not None:
            self.type = type
        if path is not None:
            self.path = path
        if file_content is not None:
            self.file_content = file_content

    @property
    def key(self):
        """Gets the key of this UploadSuccess.  # noqa: E501


        :return: The key of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._key

    @key.setter
    def key(self, key):
        """Sets the key of this UploadSuccess.


        :param key: The key of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._key = key

    @property
    def file_name(self):
        """Gets the file_name of this UploadSuccess.  # noqa: E501


        :return: The file_name of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._file_name

    @file_name.setter
    def file_name(self, file_name):
        """Sets the file_name of this UploadSuccess.


        :param file_name: The file_name of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._file_name = file_name

    @property
    def status(self):
        """Gets the status of this UploadSuccess.  # noqa: E501


        :return: The status of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this UploadSuccess.


        :param status: The status of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def type(self):
        """Gets the type of this UploadSuccess.  # noqa: E501


        :return: The type of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this UploadSuccess.


        :param type: The type of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def path(self):
        """Gets the path of this UploadSuccess.  # noqa: E501


        :return: The path of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._path

    @path.setter
    def path(self, path):
        """Sets the path of this UploadSuccess.


        :param path: The path of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._path = path

    @property
    def file_content(self):
        """Gets the file_content of this UploadSuccess.  # noqa: E501


        :return: The file_content of this UploadSuccess.  # noqa: E501
        :rtype: str
        """
        return self._file_content

    @file_content.setter
    def file_content(self, file_content):
        """Sets the file_content of this UploadSuccess.


        :param file_content: The file_content of this UploadSuccess.  # noqa: E501
        :type: str
        """

        self._file_content = file_content

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, UploadSuccess):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
