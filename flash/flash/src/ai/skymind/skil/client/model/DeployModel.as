package ai.skymind.skil.client.model {


    [XmlRootNode(name="DeployModel")]
    public class DeployModel {
                [XmlElement(name="name")]
        public var name: String = null;
                [XmlElement(name="scale")]
        public var scale: Number = NaN;
                [XmlElement(name="uri")]
        public var uri: String = null;
                [XmlElement(name="modelType")]
        public var modelType: String = null;
                [XmlElement(name="fileLocation")]
        public var fileLocation: String = null;
                [XmlElement(name="jvmArgs")]
        public var jvmArgs: String = null;
                [XmlElement(name="subType")]
        public var subType: String = null;
                [XmlElement(name="labelsFileLocation")]
        public var labelsFileLocation: String = null;
                [XmlElement(name="extraArgs")]
        public var extraArgs: String = null;
                [XmlElement(name="etlJson")]
        public var etlJson: String = null;
                [XmlElement(name="inputNames")]
        public var inputNames: String = null;
                [XmlElement(name="outputNames")]
        public var outputNames: String = null;

    public function toString(): String {
        var str: String = "DeployModel: ";
        str += " (name: " + name + ")";
        str += " (scale: " + scale + ")";
        str += " (uri: " + uri + ")";
        str += " (modelType: " + modelType + ")";
        str += " (fileLocation: " + fileLocation + ")";
        str += " (jvmArgs: " + jvmArgs + ")";
        str += " (subType: " + subType + ")";
        str += " (labelsFileLocation: " + labelsFileLocation + ")";
        str += " (extraArgs: " + extraArgs + ")";
        str += " (etlJson: " + etlJson + ")";
        str += " (inputNames: " + inputNames + ")";
        str += " (outputNames: " + outputNames + ")";
        return str;
    }

}

}
