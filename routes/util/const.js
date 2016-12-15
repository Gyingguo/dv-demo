var CHART_TYPE = ["BAR", "LINE", "POINT"];

var AGGREGATE = ["COUNT", "MEAN", "MAX", "MIN"];

var STATISTICAL_METHOD = ["ENTROPY"];

/**
 * quantitative => Q
 * temporal => T
 * ordinal => O
 * nominal => N
 * @type {[type]}   map table
 */
var DATA_TYPE_MAP_CHART_TYPE = {
	"Q": {
		"Q": ["Q_Q_POINT"],
		"T": ["Q_T_LINE", "Q_T_BAR", "Q_T_POINT"],
		"O": ["Q_O_LINE", "Q_O_BAR", "Q_O_POINT"],
		"N": ["Q_N_BAR", "Q_N_POINT"]
	},
	"T": {
		"T": [],
		"O": [],
		"N": ["T_N_POINT"]
	},
	"O": {
		"O": [],
		"N": ["O_N_POINT"]
	},
	"N": {
		"N": []
	}
}

var const_variable = {};