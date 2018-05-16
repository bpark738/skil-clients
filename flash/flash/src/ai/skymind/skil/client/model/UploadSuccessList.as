package ai.skymind.skil.client.model {

import io.swagger.common.ListWrapper;

    public class UploadSuccessList implements ListWrapper {
        // This declaration below of _UploadSuccess_obj_class is to force flash compiler to include this class
        private var _uploadSuccess_obj_class: ai.skymind.skil.client.model.UploadSuccess = null;
        [XmlElements(name="uploadSuccess", type="ai.skymind.skil.client.model.UploadSuccess")]
        public var uploadSuccess: Array = new Array();

        public function getList(): Array{
            return uploadSuccess;
        }

}

}
