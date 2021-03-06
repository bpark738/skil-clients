/* 
 * Predict
 *
 * Endpoints API for classification and other prediction services in SKIL
 *
 * OpenAPI spec version: 1.1.0-beta
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = Skymind.SKIL.Client.SwaggerDateConverter;

namespace Skymind.SKIL.Model
{
    /// <summary>
    /// Represents all of the labels for a given classification
    /// </summary>
    [DataContract]
    public partial class MultiClassClassificationResult :  IEquatable<MultiClassClassificationResult>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="MultiClassClassificationResult" /> class.
        /// </summary>
        /// <param name="RankedOutcomes">RankedOutcomes.</param>
        /// <param name="MaxOutcomes">MaxOutcomes.</param>
        /// <param name="Probabilities">Probabilities.</param>
        public MultiClassClassificationResult(List<List<string>> RankedOutcomes = default(List<List<string>>), List<string> MaxOutcomes = default(List<string>), List<List<decimal?>> Probabilities = default(List<List<decimal?>>))
        {
            this.RankedOutcomes = RankedOutcomes;
            this.MaxOutcomes = MaxOutcomes;
            this.Probabilities = Probabilities;
        }
        
        /// <summary>
        /// Gets or Sets RankedOutcomes
        /// </summary>
        [DataMember(Name="rankedOutcomes", EmitDefaultValue=false)]
        public List<List<string>> RankedOutcomes { get; set; }

        /// <summary>
        /// Gets or Sets MaxOutcomes
        /// </summary>
        [DataMember(Name="maxOutcomes", EmitDefaultValue=false)]
        public List<string> MaxOutcomes { get; set; }

        /// <summary>
        /// Gets or Sets Probabilities
        /// </summary>
        [DataMember(Name="probabilities", EmitDefaultValue=false)]
        public List<List<decimal?>> Probabilities { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class MultiClassClassificationResult {\n");
            sb.Append("  RankedOutcomes: ").Append(RankedOutcomes).Append("\n");
            sb.Append("  MaxOutcomes: ").Append(MaxOutcomes).Append("\n");
            sb.Append("  Probabilities: ").Append(Probabilities).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as MultiClassClassificationResult);
        }

        /// <summary>
        /// Returns true if MultiClassClassificationResult instances are equal
        /// </summary>
        /// <param name="input">Instance of MultiClassClassificationResult to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(MultiClassClassificationResult input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.RankedOutcomes == input.RankedOutcomes ||
                    this.RankedOutcomes != null &&
                    this.RankedOutcomes.SequenceEqual(input.RankedOutcomes)
                ) && 
                (
                    this.MaxOutcomes == input.MaxOutcomes ||
                    this.MaxOutcomes != null &&
                    this.MaxOutcomes.SequenceEqual(input.MaxOutcomes)
                ) && 
                (
                    this.Probabilities == input.Probabilities ||
                    this.Probabilities != null &&
                    this.Probabilities.SequenceEqual(input.Probabilities)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.RankedOutcomes != null)
                    hashCode = hashCode * 59 + this.RankedOutcomes.GetHashCode();
                if (this.MaxOutcomes != null)
                    hashCode = hashCode * 59 + this.MaxOutcomes.GetHashCode();
                if (this.Probabilities != null)
                    hashCode = hashCode * 59 + this.Probabilities.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
