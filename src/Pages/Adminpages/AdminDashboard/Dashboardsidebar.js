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
        <ListGroup.Item className="adminside" action  onClick={LogoutHandler}> <h5 className="fw-bold text-success">Log Out</h5> </ListGroup.Item>
        <ListGroup.Item action as={Link} className="my-2 adminside" to="/dashboard"> <h5 className=" fw-bold">Home</h5> </ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/makeadmin" action > <h5 className=" fw-bold">Make Admin</h5> </ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/manageflower" action ><h5 className=" fw-bold">Manage Flower</h5></ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/addflower" action ><h5 className=" fw-bold">Add Flower</h5></ListGroup.Item>
        <ListGroup.Item as={Link} className="my-2 adminside" to="/dashboard/manageorders" action ><h5 className=" fw-bold">Manage Orders</h5></ListGroup.Item>
  </ListGroup>
    );
};

export default Dashboardsidebar;