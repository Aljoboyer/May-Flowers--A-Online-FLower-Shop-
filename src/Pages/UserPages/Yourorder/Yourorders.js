import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetPymentdata } from '../../../features/FlowerRedux/FlowerSlice';
import Paymentstatus from '../../PaymentStatus/Paymentstatus';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import Usernavbars from '../Usernavbars/Usernavbars';
import Yourorder from './Yourorder';

const Yourorders = () => {
    const dispatch = useDispatch();
    const {user} = useFirebase()
    useEffect(() => {
        dispatch(GetPymentdata(user.email))
    },[user.email,dispatch])

    const paymentsdata = useSelector((state) => state.flowers.paymentdata)
    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            <h1 className='hometitle my-4 text-center'>Your Order</h1>
            <div className='container'>
                <Row>
                   <Col lg={7} md={6} sm={12}>
                        {
                            paymentsdata?.map(flower => <Yourorder key={flower?._id} flower={flower}></Yourorder>)
                        }
                   </Col>
                   <Col lg={5} md={6} sm={12}>
                        <h2 className='fw-bold my-4 text-center'>Payment Status</h2>
                        <Paymentstatus></Paymentstatus>
                   </Col>
                </Row>
             </div>
        </div>
    );
};

export default Yourorders;