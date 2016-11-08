//----- Part 1
// No GROUP
// d3.select("#myChart")
//   .append("svg")
//   .attr("width", 200).attr("height", 200)
//   .append("circle")
//   .attr("cx", 25).attr("cy", 25)
//   .attr("r", 25)
//   .attr("fill", "red");

//  d3.select("svg")
// 	.append("circle")
// 	.attr("cx", 80).attr("cy", 80)
// 	.attr("r", 25)
// 	.attr("fill", "yellow");

//  d3.select("svg")
// 	.append("rect")
// 	.attr("x", 55).attr("y", 0)
// 	.attr("width", 50).attr("height", 50)
// 	.attr("fill", "blue");	

// Group
// d3.select("#myChart")
//   .append("svg")
//   .attr("width", 200).attr("height", 200)
//   .append("g")
//   .attr("transform", "translate(0, 0)")
//   .append("circle")
//   .attr("cx", 25).attr("cy", 25)
//   .attr("r", 25)
//   .attr("fill", "red")
//  d3.select("g")
//   .append("circle")
//   .attr("cx", 80).attr("cy", 80)
//  .attr("r", 25)
//  .attr("fill", "yellow");

//  d3.selectAll("circle")
// 	.on("mouseover", mouseover);

// var tooltip = d3.select("#myChart")
// 				.append("div")
// 				.style("position", "absolute")
// 				.style("z-index", "10")
// 				.style("visibility", "hidden");

// function mouseover(d) {
// 	// d3.select(this)
// 	// 	.transition()
// 	// 	.attr("transform", "translate(20, 20)");

// 	// Create a text box on hover
// 	tooltip.text(d3.select(this).attr("fill"))
// 			.style("visibility", "visible")
// 			.style("top", event.pageY+"px")
// 			.style("left", event.pageX+"px");
// 	}  


//----- Part 2

var MHCIday = [
  { item: 'UCRE',  hours: 8 },
  { item: 'PUI',  hours: 3 },
  { item: 'courses for kicks and giggles', hours: 4 },
  { item: 'bond with other students', hours: 4 },
  { item: 'sleep', hours: 5}
];

var pie = d3.pie()
  .value(function(d) { return d.hours })

var slices = pie(MHCIday);
// console.log(slices);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(50);

// helper that returns a color based on an ID
var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("#myChart").append("svg");

var g = svg.append("g").attr("transform", "translate(50, 50)");

g.selectAll("path")
	.data(slices)
	.enter()
	.append("path")
	.attr("d", arc)
	.attr("fill", function(s) {return color(s.data.item);})
	// on mouse over
	.on("mousemove", mousemove);

var tooltip = d3.select("#myChart")
				.append("div")
				.style("visibility", "hidden")
				.style("z-index", "10")
				.style("position", "absolute");

function mousemove(d){
	console.log(this);
	console.log(d);
	tooltip.style("visibility", "visible")
			.text(d.data.item +": "+d.data.hours)
			.style("top", event.pageY+"px")
			.style("left", event.pageX+"px");

	d3.select(d)
		.transition()
		.duration(250)
		.attr("transform", "scale(1.2)");
}
