import React from "react";
import data from './tester.js';
var moment = require('moment');


///////////////***************** start 6 months ago ********************************/
 export function last6 () {
const subtract6 = moment().subtract(6, 'months');
const last6Month = []
for(let i = 0; i<data.length;i++){
var date1 = data[i].eventDate;
date1 = new Date(date1);
if(date1>=subtract6)
last6Month.push(data[i]);
}



var sortedData = {
  "Dec":0,
  "Jan":0,
  "Feb":0,
  "Mar":0,
  "Apr":0,
  "May":0,
  "Jun":0,
  "Jul":0
}
last6Month.forEach(function(row){
  var month = moment(row["eventDate"]).format("MMM");
  sortedData[month]+=row["hrsWatched"];
})
console.log("The Sorted Data", sortedData);
return sortedData;
}

////////////////////////*********************End 6 months ago****************** */

//////******************Start 3 months ago *********************************888 */
export function last3(){
    const subtract90 = moment().subtract(3, 'months');//Variable that holds the date that is 90 days prior to current date
    const last90 =[];
    for(let i = 0 ; i<data.length; i++){
      var date1 = data[i].eventDate;
    var date2 = moment(date1);//Creates date object
    if(date2>=subtract90){//determines if current element is within the date range 
      data[i].eventDate=moment(date2).format('YYYY-MM-DD');
      last90.push(data[i]);
      
    }}
    last90.sort((a,b)=>moment(a.eventDate).unix()-moment(b.eventDate).unix()
    );
    return last90;
    //console.log("Prior To Sorting ", last90);
    
    console.log("The Last 90 days sorted" , last90.sort((a,b)=>moment(b.eventDate).unix()-moment(a.eventDate).unix()));
    }
    
///************************End 3 months**************************** */

//************************Start Last 7 Days *******************************8 */
export function lastWeek(){
var sortedDays = { 
  "Mon" : 0, 
  "Tue": 0,
  "Wed": 0,
  "Thu" : 0,
  "Fri" : 0,
  "Sat" : 0, 
  "Sun" : 0
}
const subtract7 = moment().subtract(7, 'days');
const last7 = [];

for(let i = 0 ; i<data.length; i++){
  var date1 = data[i].eventDate;
    var date2 = moment(date1);//Creates date object
if(date2>=subtract7)//determines if current element is within the date range 
    last7.push(data[i]);
}

last7.forEach(function(row){
  var day = moment(row["eventDate"]).format("ddd");
  sortedDays[day]+=row["hrsWatched"];
  console.log("the day", day);
})
return sortedDays;
}

/////*************************End Last 7 days***********************************8  */


///////****************Start Last 30 Days ***************************************** */
export function prevMonth() {
const lastMonth = moment().subtract(1, 'month');
const last30  = [];
var j = 0;
for(let i = 0; i<data.length;i++){
var date1 = data[i].eventDate;
    var date2=moment(date1);
    if(date2>=lastMonth&&data[i].hrsWatched>0){//determines if current element is within the date range 
    
    last30[j]=data[i];
    
    data[i].eventDate=moment(last30[j].eventDate).format('YYYY-MM-DD');
  //  console.log('The reformatted date',last30[j].eventDate);
   j++;
}}
console.log('the last 30 array', last30)
last30.sort((a,b)=>moment(a.eventDate).unix()-moment(b.eventDate).unix()
);
return last30;
}

/////////////////////*********************************End Last 30************************** */
