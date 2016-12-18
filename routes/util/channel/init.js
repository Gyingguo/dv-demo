var generatedChannel = require('channel/generatedChannel');
var chartTypeChannel = require('channel/chartTypeChannel');
var aggregateTypeChannel = require('channel/aggregateTypeChannel');
var statisticalMethodChannel = require('channel/statisticalMethodChannel');
var processDataChannel = require('channel/processRawDataChannel');

var channelMap = {
  'generatedChannel': generatedChannel,
  'chartTypeChannel': chartTypeChannel,
  'aggregateTypeChannel': aggregateTypeChannel,
  'statisticalMethodChannel': statisticalMethodChannel,
  'processDataChannel': processDataChannel
};

module.exports = channelMap;
