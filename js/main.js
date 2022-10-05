
const FRAME_WIDTH = 800;
const FRAME_HEIGHT = 200;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;
const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;


const data = [55000, 48000, 27000, 66000, 90000]


const FRAME = 
	d3.select("#vis1")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");

const MAX_X = d3.max(data, (d) => {return d;})

const X_SCALE = d3.scaleLinear()
					.domain([0, MAX_X])
					.range([0, VIS_WIDTH]);

FRAME.selectAll("points")
		.data(data)
		.enter()
		.append("circle")
			.attr("cx", (d) => {return (X_SCALE(d) + MARGINS.left)})
			.attr("cy", MARGINS.top)
			.attr("r", 20)
			.attr("class", "point");

FRAME.append("g") //general SVG
		.attr("transform", "translate(" + MARGINS.left 
			+ "," + (VIS_HEIGHT + MARGINS.top) + ")")
		.call(d3.axisBottom(X_SCALE).ticks(10))
			.attr("font-size", "16px");



