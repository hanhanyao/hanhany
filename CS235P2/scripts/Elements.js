function drawElements(name){
    //console.log(abbr);
    var n = abbrState(name,'name');
    drawHistogram(n);
    showImage();
    //drawHistogram(n);
    //console.log(n);
}
function showImage() {
    var img = document.getElementById('my_images');
    console.log(img);
    img.style.visibility = 'visible';
    console.log(img);
}

function drawHistogram(name){
   var temperatures = [
  {temp: 32, month: 'January'},
  {temp: 38, month: 'February'},
  {temp: 47, month: 'March'},
  {temp: 59, month: 'April'},
  {temp: 70, month: 'May'},
  {temp: 80, month: 'June'},
  {temp: 84, month: 'July'},
  {temp: 83, month: 'Auguest'},
  {temp: 76, month: 'September'},
  {temp: 64, month: 'October'},
  {temp: 49, month: 'November'},
  {temp: 37, month: 'December'}
];
var months = temperatures.map(function(t) {
  return t.month
});

var margin = {top: 50, right: 100, bottom: 50, left: 100};
// here, we want the full chart to be 700x200, so we determine
// the width and height by subtracting the margins from those values
var fullWidth = 900;
var fullHeight = 400;
// the width and height values will be used in the ranges of our scales
var width = fullWidth - margin.right - margin.left;
var height = fullHeight - margin.top - margin.bottom;

d3.select("#hist").select("svg").remove();

var svg = d3.select('#hist').append('svg')
  .attr('width', fullWidth)
  .attr('height', fullHeight)
  // this g is where the bar chart will be drawn
  .append('g')
    // translate it to leave room for the left and top margins
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

// x value determined by month
var monthScale = d3.scaleBand()
  .domain(months)
  .range([0, width])
  .paddingInner(0.1);

// the width of the bars is determined by the scale
var bandwidth = monthScale.bandwidth();

// y value determined by temp
var maxTemp = d3.max(temperatures, function(d) { return d.temp; });
var tempScale = d3.scaleLinear()
  .domain([0, maxTemp])
  .range([height, 0])
  .nice();

var xAxis = d3.axisBottom(monthScale);
var yAxis = d3.axisLeft(tempScale);

var tooltip = svg.append("g")
    .attr("class", "tooltip")
    .style("display", "none");
    
tooltip.append("rect")
    .attr("width", 100)
    .attr("height", 20)
    .attr("fill", "grey")
    .style("opacity", 0.5);

  tooltip.append("text")
    .attr("x", 50)
    .attr("dy", "1.2em")
    .style("text-anchor", "middle")
    .attr("font-size", "12px")
    .attr("font-weight", "bold");

      

// draw the axes
svg.append('g')
  .classed('x axis', true)
  .attr('transform', 'translate(0,' + height + ')')
  .call(xAxis);

var yAxisEle = svg.append('g')
  .classed('y axis', true)
  .call(yAxis);

// add a label to the yAxis
var yText = yAxisEle.append('text')
  .attr('transform', 'rotate(-90)translate(-' + height/2 + ',0)')
  .style('text-anchor', 'middle')
  .style('fill', 'black')
  .attr('dy', '-2.5em')
  .style('font-size', 14)
  .text('Fahrenheit');

var barHolder = svg.append('g')
  .classed('bar-holder', true);

// draw the bars
var bars = barHolder.selectAll('rect.bar')
    .data(temperatures)
  .enter().append('rect')
    .classed('bar', true)
    .attr('x', function(d, i) {
      // the x value is determined using the
      // month of the datum
      return monthScale(d.month)
    })
    .attr('width', bandwidth)
    .attr('y', function(d) {
      // the y position is determined by the datum's temp
      // this value is the top edge of the rectangle
      return tempScale(d.temp);
    })
    .attr('height', function(d) {
      // the bar's height should align it with the base of the chart (y=0)
      return height - tempScale(d.temp);
    })
    .on("mouseover", function() { tooltip.style("display", null); })
    .on("mouseout", function() { tooltip.style("display", "none"); })
    .on("mousemove", function(d) {
      var xPosition = d3.mouse(this)[0];
      var yPosition = d3.mouse(this)[1] -40;
      tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
      tooltip.select("text").text("Temperature: " + d.temp);
    });
    
var isCelsius;
function convert() {
  // convert temperatures between celsius and fahrenheit
  var converter = isCelsius ? toFahrenheit : toCelsius;
  yText.text(isCelsius ? 'Fahrenheit' : 'Celsius')
  isCelsius = !isCelsius;
  temperatures.forEach(function(t) {
    t.temp = converter(t.temp);
  });

  // redraw the bars
  bars
    .transition()
      .duration(2500)   
      .attr('y', function(d) {
        return tempScale(d.temp);
      })
      .attr('height', function(d) {
        return height - tempScale(d.temp);
      })
}

function toCelsius(f) {
  return ((f-32)*5/9).toFixed(2);
}

function toFahrenheit(c) {
  return c*9/5 + 32;
}

setInterval(convert, 5000);
}
function abbrState(input, to){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    if (to == 'abbr'){
        input = input.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        for(i = 0; i < states.length; i++){
            if(states[i][0] == input){
                return(states[i][1]);
            }
        }    
    } else if (to == 'name'){
        input = input.toUpperCase();
        for(i = 0; i < states.length; i++){
            if(states[i][1] == input){
                return(states[i][0]);
            }
        }    
    }
}