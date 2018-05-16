package ai.skymind.skil.client.model {

import io.swagger.common.ListWrapper;

    public class DeployModelList implements ListWrapper {
        // This declaration below of _DeployModel_obj_class is to force flash compiler to include this class
        private var _deployModel_obj_class: ai.skymind.skil.client.model.DeployModel = null;
        [XmlElements(name="deployModel", type="ai.skymind.skil.client.model.DeployModel")]
        public var deployModel: Array = new Array();

        public function getList(): Array{
            return deployModel;
        }

}

}
