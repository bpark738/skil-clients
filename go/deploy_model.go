/*
 * Predict
 *
 * Endpoints API for classification and other prediction services in SKIL
 *
 * API version: 1.1.0-beta
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package skilclient

type DeployModel struct {

	Name string `json:"name,omitempty"`

	Scale int32 `json:"scale,omitempty"`

	Uri []string `json:"uri,omitempty"`

	ModelType string `json:"modelType,omitempty"`

	FileLocation string `json:"fileLocation,omitempty"`

	JvmArgs string `json:"jvmArgs,omitempty"`

	SubType string `json:"subType,omitempty"`

	LabelsFileLocation string `json:"labelsFileLocation,omitempty"`

	ExtraArgs string `json:"extraArgs,omitempty"`

	EtlJson string `json:"etlJson,omitempty"`

	InputNames []string `json:"inputNames,omitempty"`

	OutputNames []string `json:"outputNames,omitempty"`
}
