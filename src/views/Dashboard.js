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
//import firstChart from "./chartlogic";
import React from "react";

// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
import data from './tester.js';

//console.log(data)

class Dashboard extends React.Component {
  render() {
    /*
    let array= [];
var eventDate;
function dataGet(data){
  for(let i =0;i<data.length;i++){
    if(data[i].hrsWatched>0){
      data[i].EventDate=moment().format('MMM Do YYYY, h:mm')
     // eventDate = data.map(function(d){return d.EventDate});
      array[i]=data[i];
     }
}}
dataGet(data);
 console.log(array);
 

var hrsWatch=0;
for(let i = 0;i<data.length;i++){
if(data[i].hrsWatched>0)
  hrsWatch+=data[i].hrsWatched;
  
}
console.log("HOURS WATCHED!!! " + hrsWatch)

//import data from './tester.js';
//var moment = require('moment');
///////////////***************** start 6 months ago ********************************/
/*
export function last6 () {
const subtract6 = moment().subtract(6, 'months');
const last6Month = []
function last6(data){
for(let i = 0; i<data.length;i++){
var date1 = data[i].eventDate;
date1 = new Date(date1);
if(date1>=subtract6)
last6Month.push(data[i]);
}
}
last6(data);

var sortedData = {
  "Dec":0,
  "Jan":0,
  "Feb":0,
  "Mar":0,
  "Apr":0,
  "May":0,
  "Jun":0,
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
/*
export function last3(){
const subtract90 = moment().subtract(90, 'days');//Variable that holds the date that is 90 days prior to current date
const last90 =[];
for(let i = 0 ; i<data.length; i++){
  var date1 = data[i].eventDate;
var date2 = moment(date1);//Creates date object
if(date2>=subtract90)//determines if current element is within the date range 
console.log("is it a moment ", moment.isMoment(date2))
last90.push(data[i]);
}
return last90;
console.log("Prior To Sorting ", last90);

console.log("The Last 90 days sorted" , last90.sort((a,b)=>moment(b.eventDate).unix()-moment(a.eventDate).unix()));
}
///************************End 3 months**************************** */

//************************Start Last 7 Days *******************************8 */
/*
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
const week = moment().subtract(7, 'days');
const last7 = [];

for(let i = 0 ; i<data.length; i++){
  var date1 = data[i].eventDate;
    var date2 = moment(date1);//Creates date object
if(date2>=subtract7)//determines if current element is within the date range 
    last90.push(data[i]);
}

last7.forEach(function(row){
  var day = moment(row["eventDate"]).format("DDD");
  sortedDays[day]+=row["hrsWatched"];
})
return sortedDays;
}

/////*************************End Last 7 days***********************************8  */


///////****************Start Last 30 Days ***************************************** */
/*
export function prevMonth() {
const lastMonth = moment.subtract(1, 'month');
const last30  = [];

for(let i = 0; i<data.length;i++){
var date1 = data[i].eventDate;
    var date2 = moment(date1);
    if(date2>=lastMonth)//determines if current element is within the date range 
    last30.push(data[i]);
}
return last30;
}

    //firstChart();
    */
    return (
      <>
        <div className="content">
          <Row>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-globe text-warning" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Total Hours Watched</p>
                        <CardTitle tag="p">{hrsWatch} </CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update Now
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-money-coins text-success" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Revenue</p>
                        <CardTitle tag="p">$ 1,345</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-calendar" /> Last day
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-vector text-danger" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Errors</p>
                        <CardTitle tag="p">23</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="far fa-clock" /> In the last hour
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col lg="3" md="6" sm="6">
              <Card className="card-stats">
                <CardBody>
                  <Row>
                    <Col md="4" xs="5">
                      <div className="icon-big text-center icon-warning">
                        <i className="nc-icon nc-favourite-28 text-primary" />
                      </div>
                    </Col>
                    <Col md="8" xs="7">
                      <div className="numbers">
                        <p className="card-category">Followers</p>
                        <CardTitle tag="p">+45K</CardTitle>
                        <p />
                      </div>
                    </Col>
                  </Row>
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fas fa-sync-alt" /> Update now
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Users Behavior</CardTitle>
                  <p className="card-category">24 Hours performance</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboard24HoursPerformanceChart.data}
                    options={dashboard24HoursPerformanceChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Email Statistics</CardTitle>
                  <p className="card-category">Last Campaign Performance</p>
                </CardHeader>
                <CardBody>
                  <Pie
                    data={dashboardEmailStatisticsChart.data}
                    options={dashboardEmailStatisticsChart.options}
                  />
                </CardBody>
                <CardFooter>
                  <div className="legend">
                    <i className="fa fa-circle text-primary" /> Opened{" "}
                    <i className="fa fa-circle text-warning" /> Read{" "}
                    <i className="fa fa-circle text-danger" /> Deleted{" "}
                    <i className="fa fa-circle text-gray" /> Unopened
                  </div>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-calendar" /> Number of emails sent
                  </div>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                  <p className="card-category">Line Chart with Points</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={data}
                    options={dashboardNASDAQChart.options}
                    width={400}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  <div className="chart-legend">
                    <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                    <i className="fa fa-circle text-warning" /> BMW 5 Series
                  </div>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}


export default Dashboard;
