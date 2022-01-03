import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
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
    const cart = useSelector((state) => state.flowers.usercarts);

    const NavigateHandler = (data) => {
      navigate('/allocassion', {state: data})
    }
    const SeasonHandler = (data) => {
      navigate('/seasonsCategory', {state: data})
    }
    return (
        <Navbar collapseOnSelect expand="lg">
        <Container className="p-3">
        <Navbar.Brand href="#home"> <img className="w-75" src={logo} alt="" />  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <Nav.Link as={Link} to="/" className="  navtext"> <span className="text-dark  fw-bold">Home</span> </Nav.Link>
            {
              user.email && <> <Nav.Link className="navtext " as={Link} to="/usercart"><span className="text-dark  fw-bold">Flower Carts {cart.length}<i className="fas fa-shopping-cart"></i></span></Nav.Link>
              <Nav.Link className="navtext " as={Link} to="/yourorders"><span className="text-dark  fw-bold">Your Orders</span></Nav.Link></>
            }

            <NavDropdown className="text-dark fw-bold" title="Ocassional Flowers" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => NavigateHandler('wedding')} >WEDDINGS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('anniversary')}  >ANNIVARSARY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('birthday')}>BIRTHDAY</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => NavigateHandler('valentines')}>VALENTINES</NavDropdown.Item>
           </NavDropdown>

           <NavDropdown className="text-dark fw-bold" title="Seasonal Flowers" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => SeasonHandler('summer')} >SUMMER</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => SeasonHandler('spring')}  >SPRING</NavDropdown.Item>
           </NavDropdown>
           {
             user.email && <Nav.Link as={Link} to="/sharemoments" className=" navtext"> <span className="text-dark  fw-bold">Share Happy Moments</span> </Nav.Link>
           }
          </Nav>
         
          <Nav className="ms-auto">
            {
              user.email ? <button onClick={LogOutHandler} className='btn regularbtn fw-bold'>LogOut</button> : <Nav.Link className="logins fw-bold fs-5 text-dark" as={Link} to="/login">Log-in</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Usernavbars;