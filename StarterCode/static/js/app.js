// from data.js
var tableData = data;
var table = d3.select('#ufo-table')
var columns = d3.keys(data[0])
var tbody = table.append('tbody')

//Function build header according to data
function buildheader() {
    //Append table head
    var thead = table.append('thead')

    // append the header row
    table.select("thead").append('tr')
      .selectAll('th')
      .data(columns).enter()
      .append('th')
      .text(function (column) { return column; });

}

// // YOUR CODE HERE!
function createTable(tableData){
    console.log(tableData)
    table.select('tbody').remove()
    var	tbody = table.append('tbody');
    // create a row for each object in the data
    var rows = tbody.selectAll('tr')
        .data(tableData)
        .enter()
        .append('tr');

        // create a cell in each row for each column
	var cells = rows.selectAll('td')
		.data(function (row) {
		          return columns.map(function (column) {
		                    return {column: column, value: row[column]};
		                      });
		    })
		  .enter()
		  .append('td')
		  .text(function (x) { return x.value; });
}

createTable(tableData);

//Filter value based on input datetime
var submit = d3.select('#filter-btn')

submit.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //Grad input
    var input = d3.select("#datetime")
    //Get input value
    var inputValue = input.property("value")

    //Validate input
    var dateFormat = "D/M/YYYY";
    if (moment(inputValue, "D/M/YYYY", true).isValid() || moment(inputValue, "D/MM/YYYY", true).isValid()) {
        console.log("Date is valid")
        d3.select("#error").text("")

        //Filter the data
        var filterData = data.filter(function(x){
            return x.datetime == inputValue
        })
        createTable(filterData)
    } 
    else {
        console.log("Date is NOT valid")
        d3.select("#error").text("Date is NOT valid")
        inputValue.property("value", "")
        inputValue.property("placeholder", "1/11/2011")
        //If invalid data show all
        createTable(tableData)
    } ; // return true
})

