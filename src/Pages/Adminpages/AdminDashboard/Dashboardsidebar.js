import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';

const Dashboardsidebar = () => {
    const {LogOutUser} = useFirebase();
    const navigate = useNavigate();

    const LogoutHandler = () => {
        LogOutUser(navigate)
    }
    return (
    <ListGroup>
        <ListGroup.Item action variant="success" onClick={LogoutHandler}>Log Out</ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard">Home</ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard/makeadmin" action variant="secondary">Make Admin</ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard/manageflower" action variant="success">Manage Flower</ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard/addflower" action variant="success">Add Flower</ListGroup.Item>
        <ListGroup.Item as={Link} to="/dashboard/manageorders" action variant="success">Manage Orders</ListGroup.Item>
  </ListGroup>
    );
};

export default Dashboardsidebar;