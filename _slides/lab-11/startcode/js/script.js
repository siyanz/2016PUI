// d3.select("#myChart").append("svg").append("g")
// .append("circle").attr("cx", "30px").attr("cy", "30px").attr("r", "10px");

// d3.select("g").append("circle")
// .attr("cx", "80px").attr("cy", "80px").attr("r", "25px");

// d3.selectAll("g")
// .on("mouseover", mouseover);

// function mouseover(d) {
//     d3.select(this)
//         .transition()
//         .attr("transform", "translate(20, 20)")
// }



var MHCIday = [
  { item: 'UCRE',  hours: 8 },
  { item: 'PUI',  hours: 3 },
  { item: 'courses for kicks and giggles', hours: 4 },
  { item: 'bond with other students', hours: 4 },
  { item: 'sleep', hours: 5}
];

var pie = d3.pie()
  .value(function(d) { return d.hours });

var slices = pie(MHCIday);

var arc = d3.arc()
  .innerRadius(0)
  .outerRadius(50);

var color = d3.scaleOrdinal(d3.schemeCategory10);

var svg = d3.select("#myChart").append("svg");

svg.attr("width", "300px");
svg.attr("height", "300px");

var g = svg.append("g").attr("transform", "translate(100, 100)");

g.selectAll("path")
.data(slices)
.enter()
.append("path")
.attr("d", arc)
.attr("fill", function(s) {return color(s.data.item)});



