package ai.skymind.skil.client.model {

import io.swagger.common.ListWrapper;
import ai.skymind.skil.client.model.DeploymentObjects;

    public class DeploymentList implements ListWrapper {
        // This declaration below of _Deployment_obj_class is to force flash compiler to include this class
        private var _deployment_obj_class: ai.skymind.skil.client.model.Deployment = null;
        [XmlElements(name="deployment", type="ai.skymind.skil.client.model.Deployment")]
        public var deployment: Array = new Array();

        public function getList(): Array{
            return deployment;
        }

}

}
