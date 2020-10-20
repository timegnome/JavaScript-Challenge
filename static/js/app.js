// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");
// YOUR CODE HERE!
// datetime = data.map(date => date.datetime)
// city = data.map(date => date.city)
// state = data.map(date => date.state)
// country = data.map(date => date.country)
// shape = data.map(date => date.shape)
// durationMinutes = data.map(date => date.durationMinutes)
// comments = data.map(date => date.comments)
function showMe (box) {

   var chboxs = document.getElementsByName("c1");
   var vis = "none";
   for(var i=0;i<chboxs.length;i++) { 
        vis = (chboxs.checked) ? "block" : "none";
           break;
       }
   }
   document.getElementById(box).style.display = vis;


}
function filterDates(){
    // d3.event.preventDefault();
    var inputField = d3.select("#datetime");
    d3.select('#ufo-table').select('tbody').selectAll('tr')
    .data(tableData)
    .enter() // creates placeholder for new data
    .append("tr") // appends a div to placeholder
    // .classed("col-md-4 thumbnail", true) // sets the class of the new div
    .html(d =>
       `<td>${d.datetime}</td>
          <td>${d.city}</td>
          <td>${d.state}</td>
          <td>${d.country}</td>
          <td>${d.durationMinutes}</td>
          <td>${d.comments}</td>`);
}
d3.select('#ufo-table').select('tbody').selectAll('tr')
  .data(tableData)
  .enter() // creates placeholder for new data
  .append("tr") // appends a div to placeholder
  // .classed("col-md-4 thumbnail", true) // sets the class of the new div
  .html(d=>
     `<td>${d.datetime}</td>
        <td>${d.city}</td>
        <td>${d.state}</td>
        <td>${d.country}</td>
        <td>${d.durationMinutes}</td>
        <td>${d.comments}</td>`);

button.on("click", filterDates());
inputField.on("submit",filterDates());