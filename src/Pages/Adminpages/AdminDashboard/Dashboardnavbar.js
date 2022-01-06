import React, {useState} from 'react';
import { Container, Nav, Navbar , Offcanvas, ListGroup} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import logo from '../../../asset/logo1.png'
import '../Admin.css'
const Dashboardnavbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {LogOutUser} = useFirebase();
  const navigate = useNavigate();

  const LogoutHandler = () => {
      LogOutUser(navigate)
  }
    return (
      <>
        <Navbar collapseOnSelect expand="lg" >
        <Container>
        <Navbar.Brand href="#home"> <img className="w-75" src={logo} alt="" />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow}/>
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

      <Offcanvas className="side-offcanvas w-75" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Admin DashBoard</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ListGroup>
        <ListGroup.Item className="adminside" action  onClick={LogoutHandler}> <h5 className="fw-bold text-success">Log Out</h5> </ListGroup.Item>
        <ListGroup.Item action as={Link} className="my-2 adminside" to="/dashboard"> <h5 className=" fw-bold">Home</h5> </ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/makeadmin" action > <h5 className=" fw-bold">Make Admin</h5> </ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/manageflower" action ><h5 className=" fw-bold">Manage Flower</h5></ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/addflower" action ><h5 className=" fw-bold">Add Flower</h5></ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/manageorders" action ><h5 className=" fw-bold">Manage Orders</h5></ListGroup.Item>
  </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
      </>
    );
};

export default Dashboardnavbar;