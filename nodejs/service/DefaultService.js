'use strict';


/**
 * Use the deployed model to classify the input
 *
 * body Prediction The input NDArray
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns ClassificationResult
 **/
exports.classify = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "minibatchId" : "minibatchId",
  "results" : [ 0, 0 ],
  "probabilities" : [ 0.452, 0.452 ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Same as /classify but returns the output as Base64NDArrayBody
 *
 * body Prediction The input NDArray
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns Base64NDArrayBody
 **/
exports.classifyarray = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "ndarray" : "ndarray"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Run inference on the input and returns it as a JsonArrayResponse
 *
 * body Prediction The input NDArray
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns JsonArrayResponse
 **/
exports.jsonarray = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "array" : {
    "array" : "array"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get logs file path
 *
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns String
 **/
exports.logfilepath = function(deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get logs
 *
 * body LogRequest the the log request
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns LogBatch
 **/
exports.logs = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "offset" : 0,
  "rowCount" : 2,
  "logs" : "logs"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Set the model to be served
 *
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * file File The model file to upload (.pb file) (optional)
 * returns ModelStatus
 **/
exports.modelset = function(deploymentName,modelName,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : 100
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update the model to be served
 *
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * file File The model file to update with (.pb file) (optional)
 * returns ModelStatus
 **/
exports.modelupdate = function(deploymentName,modelName,file) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "status" : 100
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Represents all of the labels for a given classification
 *
 * body Prediction The input NDArray
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns MultiClassClassificationResult
 **/
exports.multiclassify = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "maxOutcomes" : [ "maxOutcomes", "maxOutcomes" ],
  "rankedOutcomes" : [ [ "rankedOutcomes", "rankedOutcomes" ], [ "rankedOutcomes", "rankedOutcomes" ] ],
  "probabilities" : [ [ 0.4, 0.4 ], [ 0.4, 0.4 ] ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Run inference on the input array.
 *
 * body Prediction The input NDArray
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns Prediction
 **/
exports.predict = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "needsPreProcessing" : true,
  "prediction" : {
    "array" : "array"
  },
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Preprocesses the input and run inference on it
 *
 * body List The input array
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns Prediction
 **/
exports.predictwithpreprocess = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "needsPreProcessing" : true,
  "prediction" : {
    "array" : "array"
  },
  "id" : "id"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Preprocesses the input and run inference on it and returns it as a JsonArrayResponse
 *
 * body List The input array
 * deploymentName String Name of the deployment group
 * modelName String ID or name of the deployed model
 * returns JsonArrayResponse
 **/
exports.predictwithpreprocessjson = function(body,deploymentName,modelName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "array" : {
    "array" : "array"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

