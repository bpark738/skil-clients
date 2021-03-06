/* 
 * Predict
 *
 * Endpoints API for classification and other prediction services in SKIL
 *
 * OpenAPI spec version: 1.1.0-beta
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */


#[allow(unused_imports)]
use serde_json::Value;

#[derive(Debug, Serialize, Deserialize)]
pub struct DeployModel {
  #[serde(rename = "name")]
  name: Option<String>,
  #[serde(rename = "scale")]
  scale: Option<i32>,
  #[serde(rename = "uri")]
  uri: Option<Vec<String>>,
  #[serde(rename = "modelType")]
  model_type: Option<String>,
  #[serde(rename = "fileLocation")]
  file_location: Option<String>,
  #[serde(rename = "jvmArgs")]
  jvm_args: Option<String>,
  #[serde(rename = "subType")]
  sub_type: Option<String>,
  #[serde(rename = "labelsFileLocation")]
  labels_file_location: Option<String>,
  #[serde(rename = "extraArgs")]
  extra_args: Option<String>,
  #[serde(rename = "etlJson")]
  etl_json: Option<String>,
  #[serde(rename = "inputNames")]
  input_names: Option<Vec<String>>,
  #[serde(rename = "outputNames")]
  output_names: Option<Vec<String>>
}

impl DeployModel {
  pub fn new() -> DeployModel {
    DeployModel {
      name: None,
      scale: None,
      uri: None,
      model_type: None,
      file_location: None,
      jvm_args: None,
      sub_type: None,
      labels_file_location: None,
      extra_args: None,
      etl_json: None,
      input_names: None,
      output_names: None
    }
  }

  pub fn set_name(&mut self, name: String) {
    self.name = Some(name);
  }

  pub fn with_name(mut self, name: String) -> DeployModel {
    self.name = Some(name);
    self
  }

  pub fn name(&self) -> Option<&String> {
    self.name.as_ref()
  }

  pub fn reset_name(&mut self) {
    self.name = None;
  }

  pub fn set_scale(&mut self, scale: i32) {
    self.scale = Some(scale);
  }

  pub fn with_scale(mut self, scale: i32) -> DeployModel {
    self.scale = Some(scale);
    self
  }

  pub fn scale(&self) -> Option<&i32> {
    self.scale.as_ref()
  }

  pub fn reset_scale(&mut self) {
    self.scale = None;
  }

  pub fn set_uri(&mut self, uri: Vec<String>) {
    self.uri = Some(uri);
  }

  pub fn with_uri(mut self, uri: Vec<String>) -> DeployModel {
    self.uri = Some(uri);
    self
  }

  pub fn uri(&self) -> Option<&Vec<String>> {
    self.uri.as_ref()
  }

  pub fn reset_uri(&mut self) {
    self.uri = None;
  }

  pub fn set_model_type(&mut self, model_type: String) {
    self.model_type = Some(model_type);
  }

  pub fn with_model_type(mut self, model_type: String) -> DeployModel {
    self.model_type = Some(model_type);
    self
  }

  pub fn model_type(&self) -> Option<&String> {
    self.model_type.as_ref()
  }

  pub fn reset_model_type(&mut self) {
    self.model_type = None;
  }

  pub fn set_file_location(&mut self, file_location: String) {
    self.file_location = Some(file_location);
  }

  pub fn with_file_location(mut self, file_location: String) -> DeployModel {
    self.file_location = Some(file_location);
    self
  }

  pub fn file_location(&self) -> Option<&String> {
    self.file_location.as_ref()
  }

  pub fn reset_file_location(&mut self) {
    self.file_location = None;
  }

  pub fn set_jvm_args(&mut self, jvm_args: String) {
    self.jvm_args = Some(jvm_args);
  }

  pub fn with_jvm_args(mut self, jvm_args: String) -> DeployModel {
    self.jvm_args = Some(jvm_args);
    self
  }

  pub fn jvm_args(&self) -> Option<&String> {
    self.jvm_args.as_ref()
  }

  pub fn reset_jvm_args(&mut self) {
    self.jvm_args = None;
  }

  pub fn set_sub_type(&mut self, sub_type: String) {
    self.sub_type = Some(sub_type);
  }

  pub fn with_sub_type(mut self, sub_type: String) -> DeployModel {
    self.sub_type = Some(sub_type);
    self
  }

  pub fn sub_type(&self) -> Option<&String> {
    self.sub_type.as_ref()
  }

  pub fn reset_sub_type(&mut self) {
    self.sub_type = None;
  }

  pub fn set_labels_file_location(&mut self, labels_file_location: String) {
    self.labels_file_location = Some(labels_file_location);
  }

  pub fn with_labels_file_location(mut self, labels_file_location: String) -> DeployModel {
    self.labels_file_location = Some(labels_file_location);
    self
  }

  pub fn labels_file_location(&self) -> Option<&String> {
    self.labels_file_location.as_ref()
  }

  pub fn reset_labels_file_location(&mut self) {
    self.labels_file_location = None;
  }

  pub fn set_extra_args(&mut self, extra_args: String) {
    self.extra_args = Some(extra_args);
  }

  pub fn with_extra_args(mut self, extra_args: String) -> DeployModel {
    self.extra_args = Some(extra_args);
    self
  }

  pub fn extra_args(&self) -> Option<&String> {
    self.extra_args.as_ref()
  }

  pub fn reset_extra_args(&mut self) {
    self.extra_args = None;
  }

  pub fn set_etl_json(&mut self, etl_json: String) {
    self.etl_json = Some(etl_json);
  }

  pub fn with_etl_json(mut self, etl_json: String) -> DeployModel {
    self.etl_json = Some(etl_json);
    self
  }

  pub fn etl_json(&self) -> Option<&String> {
    self.etl_json.as_ref()
  }

  pub fn reset_etl_json(&mut self) {
    self.etl_json = None;
  }

  pub fn set_input_names(&mut self, input_names: Vec<String>) {
    self.input_names = Some(input_names);
  }

  pub fn with_input_names(mut self, input_names: Vec<String>) -> DeployModel {
    self.input_names = Some(input_names);
    self
  }

  pub fn input_names(&self) -> Option<&Vec<String>> {
    self.input_names.as_ref()
  }

  pub fn reset_input_names(&mut self) {
    self.input_names = None;
  }

  pub fn set_output_names(&mut self, output_names: Vec<String>) {
    self.output_names = Some(output_names);
  }

  pub fn with_output_names(mut self, output_names: Vec<String>) -> DeployModel {
    self.output_names = Some(output_names);
    self
  }

  pub fn output_names(&self) -> Option<&Vec<String>> {
    self.output_names.as_ref()
  }

  pub fn reset_output_names(&mut self) {
    self.output_names = None;
  }

}



