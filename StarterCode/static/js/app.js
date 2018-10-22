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


//Filter value based on input datetime
submit = d3.select('#filter-btn')

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
        var filterData = data.filter(function(d){
            return d.datetime == value
        })
        buildTable(filterData)
    } else {
        console.log("Date is NOT valid")
        d3.select("#error").text("Date is NOT valid")
        inputvalue.property("value", "")
        inputvalue.property("placeholder", "1/11/2011")
        //If invalid data show all
        buildTable(data)
    } ; // return true
})