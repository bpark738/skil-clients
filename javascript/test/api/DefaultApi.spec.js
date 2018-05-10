/**
 * Predict
 * Endpoints API for classification and other prediction services in SKIL
 *
 * OpenAPI spec version: 1.0.3
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SkilClient);
  }
}(this, function(expect, SkilClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SkilClient.DefaultApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DefaultApi', function() {
    describe('classify', function() {
      it('should call classify successfully', function(done) {
        //uncomment below and update the code to test classify
        //instance.classify(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('classifyarray', function() {
      it('should call classifyarray successfully', function(done) {
        //uncomment below and update the code to test classifyarray
        //instance.classifyarray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('classifyimage', function() {
      it('should call classifyimage successfully', function(done) {
        //uncomment below and update the code to test classifyimage
        //instance.classifyimage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('jsonarray', function() {
      it('should call jsonarray successfully', function(done) {
        //uncomment below and update the code to test jsonarray
        //instance.jsonarray(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logfilepath', function() {
      it('should call logfilepath successfully', function(done) {
        //uncomment below and update the code to test logfilepath
        //instance.logfilepath(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('logs', function() {
      it('should call logs successfully', function(done) {
        //uncomment below and update the code to test logs
        //instance.logs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modelset', function() {
      it('should call modelset successfully', function(done) {
        //uncomment below and update the code to test modelset
        //instance.modelset(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modelupdate', function() {
      it('should call modelupdate successfully', function(done) {
        //uncomment below and update the code to test modelupdate
        //instance.modelupdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('multiclassify', function() {
      it('should call multiclassify successfully', function(done) {
        //uncomment below and update the code to test multiclassify
        //instance.multiclassify(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('predict', function() {
      it('should call predict successfully', function(done) {
        //uncomment below and update the code to test predict
        //instance.predict(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('predict_0', function() {
      it('should call predict_0 successfully', function(done) {
        //uncomment below and update the code to test predict_0
        //instance.predict_0(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('predictwithpreprocess', function() {
      it('should call predictwithpreprocess successfully', function(done) {
        //uncomment below and update the code to test predictwithpreprocess
        //instance.predictwithpreprocess(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('predictwithpreprocessjson', function() {
      it('should call predictwithpreprocessjson successfully', function(done) {
        //uncomment below and update the code to test predictwithpreprocessjson
        //instance.predictwithpreprocessjson(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
