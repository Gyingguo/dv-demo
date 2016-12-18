var line = {};

/**
 * [lineFormat description]
 * @param  {[type]} data [description]
 * {
 *   "x": {
 *    "name": "x",
 *    "values": [1, 2, 3, 4],
 *    "type": "ordinal"
 *   },
 *   "y": {
 *    "name": "y",
 *    "values": [1, 2, 3],
 *    "type": "quantitative",
 *    "aggregate": "avg"
 *   }
 * }
 *
 * @return {[type]}      [description]
 *
 * {
    "description": "A simple bar chart with embedded data.",
    "data": {
      "values": [
        {"a": "A","b": 28},
        {"a": "B","b": 55},
        {"a": "C","b": 43},
        {"a": "D","b": 91},
        {"a": "E","b": 81},
        {"a": "F","b": 53},
        {"a": "G","b": 19},
        {"a": "H","b": 87},
        {"a": "I","b": 52}
      ]
    },
    "mark": "line",
    "encoding": {
      "x": {"field": "a","type": "ordinal"},
      "y": {"field": "b","type": "quantitative"}
    }
  }
 */
line.lineFormat = function (data) {
  var format = {
    "data": {
      "values": []
    },
    "mark": "line",
    "encoding": {
      "x": {"field": null, "type": null, "axis": {"title": null},
      "y": {"field": null, "type": null, "axis": {"title": null}
    }
  };

  var xName = data.x.name;
  var yName = data.y.name;
  var xType = data.x.type;
  var yType = data.y.type;
  var xData = data.x.values;
  var yData = data.y.values;
  var yAgg = data.y.aggregate;

  // process values
  for (var i = 0; i < xData.length() && i < yData.length(); i++) {
      var value = {};

      value[xName] = xData[i];
      value[yName] = yData[i];

      format.data.values.push(value);
  }

  format.data.encoding.x.field = xName;
  format.data.encoding.y.field = yName;

  format.data.encoding.x.type = xType;
  format.data.encoding.y.type = yType;

  format.data.encoding.x.axis.title = xName;
  format.data.encoding.y.axis.title = yAgg + ' of ' + yName;

  return format;
};

module.exports = line;
