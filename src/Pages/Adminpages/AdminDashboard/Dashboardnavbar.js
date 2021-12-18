import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../asset/logo1.png'
import '../Admin.css'
const Dashboardnavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand href="#home"> <img className="w-75" src={logo} alt="" />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <h4><span className='fs-4 fw-bold spans mx-2'>Admin DashBoard</span></h4>
 
          </Nav>
          <Nav.Link className="navss" as={Link} to="/"> <span className='fw-bold spans'>See User Home</span> </Nav.Link>
          <Nav>

          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Dashboardnavbar;