import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetPymentstatus } from '../../features/FlowerRedux/FlowerSlice';
import useFirebase from '../SharedPages/FirebaseAuthentication/Firebaseauth';
const Paymentstatus = () => {
    const {user} = useFirebase();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetPymentstatus(user.email))
    },[user.email, dispatch]);

    const statuses = useSelector((state) => state.flowers.paymentstatus)

    return (
        <Row className="container">
            {
                statuses?.map(status => 
                <>
                    <Col lg={12}  md={12} sm={12}>
                    <h4 className="text-center">Payment Date: {status.paymentdate}</h4>
                    <h5 className='text-center'>Total Amount: {status.amount}</h5>
                    <h5 className='text-center'>Total Flower: {status.floweramount}</h5>
                </Col>
                <hr />
                </>
                )
            }
        </Row>
    );
};

export default Paymentstatus;