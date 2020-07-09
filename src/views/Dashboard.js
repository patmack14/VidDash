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
import Select from 'react-select';

// react plugin used to create charts
import { Line } from "react-chartjs-2";
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
  dashboardLast180DaysChart,
  dashboardLast90,
  lastMonth,
  last7Days
} from "variables/charts.js";

import data from './tester.js';
var moment = require('moment');

const dropDown = [
  { value: 'week', label: 'Past Week'},
  { value: 'month', label: 'Last Month'},
  {value:  'months3' , label: 'Last 3 Months'},
  { value: 'months6', label: 'Last 6 months'},
]
const groupedOptions = [
  {
    label: 'Time Period',
    options: dropDown,
  },

];

function LineChart(props){
  return ( 
      <CardBody>
    <Line
      data={props.data}
      options={props.options}
      width={400}
      height={100}
    />
  </CardBody>

  )
}

let ChartHeader = (props) => {
  if(props.value == 'week'){ return (
    <CardHeader>
      <CardTitle tag="h5">Hours Watched in last week </CardTitle>
    </CardHeader>
      )} else if(props.value == 'month') { 
        return (
    <CardHeader>
      <CardTitle tag="h5">Views (Hours Watched in last month)</CardTitle>
    </CardHeader>
      ) } else if(props.value == 'months3') { 
        return (
      <CardHeader>
        <CardTitle tag="h5">Hours Watched in last 3 months</CardTitle>
      </CardHeader>
      )
    }  return (
      <CardHeader>
        <CardTitle tag="h5">Hours watched in last 6 months</CardTitle>
      </CardHeader>
      )
    }
    




function ChartType(props){
  if(props.value == 'week'){
      return <LineChart data = {last7Days.data} options = {last7Days.options} />
      }
  else if (props.value == 'month'){
      return <LineChart data = {lastMonth.data} options= {lastMonth.options} />
  }
  else if (props.value == 'months3'){
      return <LineChart data = {dashboardLast90.data} options = {dashboardLast90.options} />
  }
  else if (props.value == 'months6'){
      return <LineChart data = {dashboardLast180DaysChart.data} options = {dashboardLast180DaysChart.options} />
  }
  return<div></div>
  
}

class Dashboard extends React.Component {
  constructor(props) {
  super(props);
  this.state = {chart: 'week'};
}

handleChange = (selectedOption) => { //this tells React what to do when a different chart is selected
  this.setState({chart:selectedOption.value})
}



  render() {
    
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
            
          </Row>
          <Row>
            <Col md="12">
              <Card>
              <ChartHeader value={this.state.chart} />
                <ChartType value={this.state.chart} />
                
                <CardFooter>
                  <hr />
                  <div className="stats">
                  <Select
                    defaultValue={dropDown[0]}
                    onChange={this.handleChange}
                    options = {groupedOptions}
                   />
                  </div>
                  <div>
                    <p className = "title">Click to select graph timeframe</p>
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
