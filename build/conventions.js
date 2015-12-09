'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = conventions;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _d3 = require('d3');

var _d32 = _interopRequireDefault(_d3);

function conventions(opt) {

	var options = opt || {};

	var margin = options.margin || { top: 1, right: 1, bottom: 1, left: 1 };
	var outerWidth = options.width || 800;
	var outerHeight = options.height || 500;

	var width = outerWidth - margin.left - margin.right;
	var height = outerHeight - margin.top - margin.bottom;

	var parentSelection = options.parentSelection || _d32['default'].select('body');

	var svg = options.svg || parentSelection.append('svg').attr({
		width: outerWidth,
		height: outerHeight
	}).append('g').attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

	var x = options.x || _d32['default'].scale.linear().range([0, width]);
	var y = options.y || _d32['default'].scale.linear().range([height, 0]);

	var xAxis = _d32['default'].svg.axis().scale(x).orient('bottom');
	var yAxis = _d32['default'].svg.axis().scale(y).orient('left');

	return {
		width: width,
		height: height,
		svg: svg,
		x: x,
		y: y,
		xAxis: xAxis,
		yAxis: yAxis
	};
}

module.exports = exports['default'];
