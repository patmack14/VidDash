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
  dashboardLast180DaysChart,
  dashboardLast90,
  lastMonth,
  last7Days
} from "variables/charts.js";
import data from './tester.js';
var moment = require('moment');

//console.log(data)

class Dashboard extends React.Component {
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
         </Row>

          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Views in:</CardTitle>
                  <p className="card-category">Past 6 Months</p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLast180DaysChart.data}
                    options={dashboardLast180DaysChart.options}
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
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Last 90 Days</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Line
                    data={dashboardLast90.data}
                    options={dashboardLast90.options}
                    width={600}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                
                  <hr />
                  <div className="card-stats">
          
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

            <Row>
            
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Previous Month</CardTitle>
                  <p className="card-category"></p>
                </CardHeader>
                <CardBody>
                  <Line
                    data={lastMonth.data}
                    options={lastMonth.options}
                    width={600}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                  
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Last Week</CardTitle>
                  
                </CardHeader>
                <CardBody>
                  <Line
                    data={last7Days.data}
                    options={last7Days.options}
                    width={600}
                    height={100}
                  />
                </CardBody>
                <CardFooter>
                
                  <hr />
                  <div className="card-stats">
          
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
