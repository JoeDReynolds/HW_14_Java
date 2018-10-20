// from data.js
var tableData = data;
var tbody = d3.select('tbody');

// YOUR CODE HERE!

//Populate Table w/ JavaScript

tableData.forEach(function(sighting){
    console.log(sighting)
    var row = tbody.append('tr')
    Object.entries(sighting).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append('td');
        cell.text(value);
    });
});

// function handleSubmit() {
//     // Prevent the page from refreshing
//     d3.event.preventDefault();
  
//     // Select the input value from the form
//     var inputValue = d3.select('#datetime').property('value')
//     // clear the input value
//     d3.select('#stockInput').node().value = ""
  
//     // Build the new table
//     filterTable(inputValue)
//   }

//   var filteredTable = tableData.filter(sighting => sighting.datetime === inputValue);

//   d3.select('#filter-btn').on('click', handleSubmit)

//Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  filteredData.forEach(function(sighting){
    console.log(sighting)
    var row = tbody.append('tr')
    Object.entries(sighting).forEach(function([key, value]){
        console.log(key, value);
        var cell = tbody.append('td');
        cell.text(value);
    })
})
});