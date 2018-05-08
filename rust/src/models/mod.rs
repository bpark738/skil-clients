mod base64_nd_array_body;
pub use self::base64_nd_array_body::Base64NdArrayBody;
mod classification_result;
pub use self::classification_result::ClassificationResult;
mod ind_array;
pub use self::ind_array::IndArray;
mod json_array_response;
pub use self::json_array_response::JsonArrayResponse;
mod log_batch;
pub use self::log_batch::LogBatch;
mod log_request;
pub use self::log_request::LogRequest;
mod model_status;
pub use self::model_status::ModelStatus;
mod multi_class_classification_result;
pub use self::multi_class_classification_result::MultiClassClassificationResult;
mod prediction;
pub use self::prediction::Prediction;

// TODO(farcaller): sort out files
pub struct File;
