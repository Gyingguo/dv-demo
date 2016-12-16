var generatedChannel = require('channel/generatedChannel');
var chartTypeChannel = require('channel/chartTypeChannel');
var aggregateTypeChannel = require('channel/aggregateTypeChannel');
var statisticalMethodChannel = require('channel/statisticalMethodChannel');
var processDataChannel = require('channel/processRawDataChannel');

// collect attributes
function collectAttributes(schema) {
	var attributes = [];

	for (var i = 0; i < schema.length(); i++) {
		var elem = schema[i];
		attributes.push(elem['field_name']);
	}

	return attributes;
}

// collect data types
function collectDataTypes(schema) {
	var dataTypes = {};

	for (var i = 0; i < schema.length(); i++) {
		var elem = schema[i];
		var field = elem['field_name'];
		var type = elem['data_type'];

		dataTypes[field] = type;
	}

	return dataTypes;
}

function calculateScores(set) {
	var result = [];
}

var encoding = {};

/**
 * [encoding description]
 * @param  {[type]} schema       [{"key": "OPERATOR", "field_name": "Aircraft__Airline_Operator","enabled": true}]
 * @param  {[type]} data         [description]
 * @param  {[type]} selectedElem [description]
 * @return {[type]}              [description]
 */
encoding.encoding = function (schema, data, selectedElem) {

	// go through generatedChannel
	var fields = collectAttributes(schema);
	var generatedSet = generatedChannel.generatedChannel(fields, selectedElem);

	// go through chartTypeChannel
	var types = collectDataTypes(schema);
	var chartTypeSet = chartTypeChannel.chartTypeChannel(generatedSet, types);

	// go through aggregateTypeChannel
	var aggregateTypeSet = aggregateTypeChannel.aggregateTypeChannel(chartTypeSet);

	// go through statisticalMethodChannel
	var statisticalMethodSet = statisticalMethodChannel.statisticalMethodChannel(aggregateTypeSet);

	// go through dataChannel
	var dataProcessSet = processDataChannel.processRawDataChannel(statisticalMethodSet);
};

module.exports = encoding;