/*
 * Predict
 *
 * Endpoints API for classification and other prediction services in SKIL
 *
 * API version: 1.1.0-beta
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package skilclient

type Deployment struct {

	Id string `json:"id,omitempty"`

	Name string `json:"name,omitempty"`

	DeploymentSlug string `json:"deploymentSlug,omitempty"`

	Status string `json:"status,omitempty"`

	Body *DeploymentObjects `json:"body,omitempty"`
}
