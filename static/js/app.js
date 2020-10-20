// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var datetimeField = d3.select("#datetime");
var cityField = d3.select("#city");
var stateField = d3.select("#state");
var countryField = d3.select("#country");
var shapeField = d3.select("#shape");
// datetime = data.map(date => date.datetime)
// city = data.map(date => date.city)
// state = data.map(date => date.state)
// country = data.map(date => date.country)
// shape = data.map(date => date.shape)
// durationMinutes = data.map(date => date.durationMinutes)
// comments = data.map(date => date.comments)
// function showMe () {

//    var chboxs = d3.selectAll("#c1");
//    chboxs.each( box =>{
//         vis = (box.checked) ? "block" : "none";
//         d3.select(box).style.display = vis;
//         console.log(box)
//    })
//    }
function filterDates(){
    // d3.event.preventDefault();
   // console.log(datetimeField.property('value'))
   // n= d3.selectAll("input[type=checkbox]").nodes();
   // filters = false;
   // for (var a = 0; a < n.length; a++){
   //    filters = n[a].checked;
   // }
   tableData = data;

    tableData = (d3.select('#dateCheck').node().checked) ? tableData.filter(tableD => tableD.datetime === datetimeField.property('value')) : tableData;
    tableData = (d3.select('#cityCheck').node().checked) ? tableData.filter(tableD => tableD.city === cityField.property('value')) : tableData;
    tableData = (d3.select('#stateCheck').node().checked) ? tableData.filter(tableD => tableD.state === stateField.property('value')) : tableData;
    tableData = (d3.select('#countryCheck').node().checked) ? tableData.filter(tableD => tableD.country === countryField.property('value')) : tableData
    tableData = (d3.select('#shapeCheck').node().checked) ? tableData.filter(tableD => tableD.shape === shapeField.property('value')) : tableData;
    ufo_tabled = d3.select('#ufo-table').select('tbody')
    ufo_tabled.html('')
    console.log('after');
    ufo_tabled.selectAll('tr')
    .data(tableData)
    .enter() // creates placeholder for new data
    .append("tr") // appends a div to placeholder
    // .classed("col-md-4 thumbnail", true) // sets the class of the new div
    .html(d =>
       `<td>${d.datetime}</td>
          <td>${d.city}</td>
          <td>${d.state}</td>
          <td>${d.country}</td>
          <td>${d.shape}</td>
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
        <td>${d.shape}</td>
        <td>${d.durationMinutes}</td>
        <td>${d.comments}</td>`);

button.on("click", filterDates);
cityField.on("submit",filterDates);
stateField.on("submit",filterDates);
countryField.on("submit",filterDates);
shapeField.on("submit",filterDates);
datetimeField.on("submit",filterDates);
// d3.selectAll("c1").on('click',showMe())