import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import './navs.css';
import logo from '../../../asset/logo1.png'
const Usernavbars = () => {
    const {user, LogOutUser} = useFirebase();
    const navigate = useNavigate()

    const LogOutHandler = () => {
      LogOutUser(navigate)
    };
    // const cart = useSelector((state) => state.flowers.usercarts);

    const NavigateHandler = (data) => {
      navigate('/allocassion', {state: data})
    }
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container className="p-3">
        <Navbar.Brand href="#home"> <img className="w-75" src={logo} alt="" />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/" className="mx-2  navtext"> <span className="text-dark  fw-bold">Home</span> </Nav.Link>
            <Nav.Link className="navtext " as={Link} to="/usercart"><span className="text-dark  fw-bold">Your Carts<i className="fas fa-shopping-cart"></i></span></Nav.Link>
            <Nav.Link className="navtext mx-2" as={Link} to="/yourorders"><span className="text-dark  fw-bold">Your Orders</span></Nav.Link>
            <Nav.Link className="navtext " as={Link} to="/dashboard">Dashboard</Nav.Link>

            <NavDropdown className="text-dark fw-bold" title="Ocassional Flowers" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => NavigateHandler('wedding')} >WEDDINGS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('anniversary')}  >ANNIVARSARY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('birthday')}>BIRTHDAY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('valentines')}>Separated link</NavDropdown.Item>
           </NavDropdown>
          </Nav>
         
          <Nav className="ms-auto">
            {
              user.email ? <button onClick={LogOutHandler} className='btn regularbtn fw-bold'>LogOut</button> : <Nav.Link as={Link} to="/login">Log-in</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Usernavbars;