/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {last6, lastWeek, last3, prevMonth} from 'views/chartlogic.js';

last3();
const monthLabel = last3().map(function(d) {return d.eventDate}) 
const last3Month = last3().map(function(d){return d.hrsWatched})

last6();
const sortedData = last6();
var monthLabels = Object.keys(sortedData);
var month6Data= Object.values(sortedData);

prevMonth();
var last30Labels = prevMonth().map(function(d) {return d.eventDate});
var prevMonthData  = prevMonth().map(function (d) {return d.hrsWatched});

lastWeek();
var sortedWeek = lastWeek();
var last7Labels = Object.keys(sortedWeek);
var last7 = Object.values(sortedWeek);

export const last7Days = {
  data: {
    labels: last7Labels,
    datasets: [
      {
        data: last7,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },



}





export const dashboardLast180DaysChart = {
  data: {
    labels: monthLabels,
    datasets: [
      {
        data: month6Data,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
}
export const dashboardLast90 = {
  data: {
    labels: monthLabel,
    datasets: [
      {
        data: last3Month,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    legend: {
      display: false,
      position: "top",
    },
  },
};
      



export const lastMonth = {
  data: {
    labels: last30Labels,
    datasets: [
      {
        data: prevMonthData,
        fill: false,
        borderColor: "#fbc658",
        backgroundColor: "transparent",
        pointBorderColor: "#fbc658",
        pointRadius: 4,
        pointHoverRadius: 4,
        pointBorderWidth: 8,
      },
     
    ],
  },
  options: {
    legend: {
      display: false,
      position: "top",
    },
  },
};


