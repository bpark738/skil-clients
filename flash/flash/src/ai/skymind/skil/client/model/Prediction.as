package ai.skymind.skil.client.model {

import ai.skymind.skil.client.model.INDArray;

    [XmlRootNode(name="Prediction")]
    public class Prediction {
                [XmlElement(name="id")]
        public var id: String = null;
                [XmlElement(name="needsPreProcessing")]
        public var needsPreProcessing: Boolean = false;
                [XmlElement(name="prediction")]
        public var prediction: INDArray = NaN;

    public function toString(): String {
        var str: String = "Prediction: ";
        str += " (id: " + id + ")";
        str += " (needsPreProcessing: " + needsPreProcessing + ")";
        str += " (prediction: " + prediction + ")";
        return str;
    }

}

}
