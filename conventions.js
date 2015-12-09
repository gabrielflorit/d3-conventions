import d3 from 'd3';

export default function conventions(opt) {

	let options = opt || {};

	const margin = options.margin || {top: 1, right: 1, bottom: 1, left: 1};
	const outerWidth = options.width || 800;
	const outerHeight = options.height || 500;

	const width = outerWidth - margin.left - margin.right;
	const height = outerHeight - margin.top - margin.bottom;

	const parentSelection = options.parentSelection || d3.select('body');

	const svg = options.svg || parentSelection.append('svg').attr({
		width: outerWidth,
		height: outerHeight
	}).append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

	const x = options.x || d3.scale.linear().range([0, width]);
	const y = options.y || d3.scale.linear().range([height, 0]);

	const xAxis = d3.svg.axis().scale(x).orient('bottom');
	const yAxis = d3.svg.axis().scale(y).orient('left');

	return {
		width,
		height,
		svg,
		x,
		y,
		xAxis,
		yAxis
	};

}

