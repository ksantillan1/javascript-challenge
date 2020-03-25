// from data.js

var tableData = data;
var filterdata = data;

var tbody = d3.select("tbody");


data.forEach(function(UFOsighting) {
  console.log(UFOsighting);
  
  var row = tbody.append("tr");
  
  row.append("td").text(UFOsighting.datetime);
  row.append("td").text(UFOsighting.city);
  row.append("td").text(UFOsighting.state);
  row.append("td").text(UFOsighting.country);
  row.append("td").text(UFOsighting.shape);
  row.append("td").text(UFOsighting.durationMinutes);
  row.append("td").text(UFOsighting.comments);
  
  });
  
var button = d3.select("#filter-btn");
 
button.on("click", function() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  
  console.log(inputValue);
  
  if (inputValue === "") {
	
	tbody.html("")
	data.forEach(function(UFOsighting) {
		console.log(UFOsighting);
  
		var row = tbody.append("tr");
  
		row.append("td").text(UFOsighting.datetime);
		row.append("td").text(UFOsighting.city);
		row.append("td").text(UFOsighting.state);
		row.append("td").text(UFOsighting.country);
		row.append("td").text(UFOsighting.shape);
		row.append("td").text(UFOsighting.durationMinutes);
		row.append("td").text(UFOsighting.comments);
  
	});
  }
  else {
	
	  function filteringfunction(sighting) {
	  return sighting.datetime === inputValue;
	  }
	  
	  var finalfilter = filterdata.filter(filteringfunction);
	  
	  tbody.html("")
	  
	  console.log(finalfilter);
	  
	  finalfilter.forEach(function(UFOsighting) {

	  
	  var row = tbody.append("tr");
	  
	  row.append("td").text(UFOsighting.datetime);
	  row.append("td").text(UFOsighting.city);
	  row.append("td").text(UFOsighting.state);
	  row.append("td").text(UFOsighting.country);
	  row.append("td").text(UFOsighting.shape);
	  row.append("td").text(UFOsighting.durationMinutes);
	  row.append("td").text(UFOsighting.comments);
	  
	  });
 
  }
});

