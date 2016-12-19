var channel = require('./channel/init');

// collect attributes
function collectAttributes(schema) {
	var attributes = [];

	for (var i = 0; i < schema.length; i++) {
		var elem = schema[i];
		attributes.push(elem['field_name']);
	}

	return attributes;
}

// collect data types
function collectDataTypes(schema) {
	var dataTypes = {};

	for (var i = 0; i < schema.length; i++) {
		var elem = schema[i];
		var field = elem['field_name'];
		var type = elem['data_type'];

		dataTypes[field] = type;
	}

	return dataTypes;
}

/**
 * [calculateScores description]
 * @param  {[type]} set  [description]
 * @param  {[type]} topk [description] 返回topk的结果
 * @return {[type]}      [description]
 */
function calculateScores(set, topk) {
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
	console.log('start encoding...');

	// go through generatedChannel
	var fields = collectAttributes(schema);
	var generatedSet = channel.generatedChannel.generatedChannel(fields, selectedElem);
	console.log('go through generatedChannel...');

	// go through chartTypeChannel
	var types = collectDataTypes(schema);
	var chartTypeSet = channel.chartTypeChannel.chartTypeChannel(generatedSet, types);
	console.log('go through chartTypeChannel...');

	// go through aggregateTypeChannel
	var aggregateTypeSet = channel.aggregateTypeChannel.aggregateTypeChannel(chartTypeSet);
	console.log('go through aggregateTypeChannel...');

	// go through statisticalMethodChannel
	var statisticalMethodSet = channel.statisticalMethodChannel.statisticalMethodChannel(aggregateTypeSet);
	console.log('go through statisticalMethodChannel...');

	// go through dataChannel
	var dataProcessRawSet = channel.processDataChannel.processRawDataChannel(statisticalMethodSet, data);
	console.log('go through processRawDataChannel...');

	var dataProcessAggregateSet = channel.processDataChannel.processAggregateDataChannel(dataProcessRawSet);
	console.log('go through processAggregateDataChannel...');

	return dataProcessAggregateSet;
};

module.exports = encoding;
