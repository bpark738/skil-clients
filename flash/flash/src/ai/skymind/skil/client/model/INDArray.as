package ai.skymind.skil.client.model {


    [XmlRootNode(name="INDArray")]
    public class INDArray {
                [XmlElement(name="array")]
        public var array: String = null;

    public function toString(): String {
        var str: String = "INDArray: ";
        str += " (array: " + array + ")";
        return str;
    }

}

}
