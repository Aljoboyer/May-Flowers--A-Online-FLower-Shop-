import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Dashboardnavbar from './Dashboardnavbar';
import Dashboardsidebar from './Dashboardsidebar';
import {
    Outlet
  } from "react-router-dom";
const Dashboard = () => {
    return (
        <div className="container-fluid">
            <Dashboardnavbar></Dashboardnavbar>
            <Row>
                <Col lg={2}>
                    <Dashboardsidebar></Dashboardsidebar>
                </Col>
                <Col lg={10} md={12} sm={12}>
                    <Outlet/>
                </Col>
            </Row>
        </div>
    );
};

export default Dashboard;