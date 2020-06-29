import React from "react";
import data from '..\variables\docdata.js';

function firstChart(data){

var date = data.map(function(d){return + d.EventDate});
console.log("butt!")
console.log(date)

};

export default firstChart;