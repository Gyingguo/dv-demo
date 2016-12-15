var generatedSuggestedset = {};

/**
 * [generatedSuggestedset description]
 * @param  {[type]} dataset           ["name", "year", "cylinder"]
 * @param  {[type]} selectedAttribute [description]
 * @return {[type]}                   [description]
 */
generatedSuggestedset.generatedSuggestedset = function (dataset, selectedAttribute) {
	/**
	 * result [["name", "year"], ["name", "cylinder"], ["year", "cylinder"]]
	 * @type {Array}
	 */
	var result = [];
	// if the user selected an attribute, generate suggested set based on this attribute
	if (selectedAttribute) {
		// overide
	} else {
		for (var i = 0; i < dataset.length(); i++) {
			for (var j = i + 1; j < dataset.length(); j++) {
				var pair = [];
				pair.push(dataset[i]);
				pair.push(dataset[j]);
				result.push(pair);
			}
		}
	}

	return result;
};


module.exports = generatedSuggestedset;