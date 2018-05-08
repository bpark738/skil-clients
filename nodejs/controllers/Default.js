'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.classify = function classify (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.classify(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.classifyarray = function classifyarray (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.classifyarray(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.jsonarray = function jsonarray (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.jsonarray(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logfilepath = function logfilepath (req, res, next) {
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.logfilepath(deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.logs = function logs (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.logs(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modelset = function modelset (req, res, next) {
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  var file = req.swagger.params['file'].value;
  Default.modelset(deploymentName,modelName,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modelupdate = function modelupdate (req, res, next) {
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  var file = req.swagger.params['file'].value;
  Default.modelupdate(deploymentName,modelName,file)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.multiclassify = function multiclassify (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.multiclassify(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.predict = function predict (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.predict(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.predictwithpreprocess = function predictwithpreprocess (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.predictwithpreprocess(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.predictwithpreprocessjson = function predictwithpreprocessjson (req, res, next) {
  var body = req.swagger.params['body'].value;
  var deploymentName = req.swagger.params['deploymentName'].value;
  var modelName = req.swagger.params['modelName'].value;
  Default.predictwithpreprocessjson(body,deploymentName,modelName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
