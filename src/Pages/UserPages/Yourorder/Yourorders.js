import React, { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { CancelOrder, GetPymentdata } from '../../../features/FlowerRedux/FlowerSlice';
import Paymentstatus from '../../PaymentStatus/Paymentstatus';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import Usernavbars from '../Usernavbars/Usernavbars';
import Yourorder from './Yourorder';

const Yourorders = () => {
    const dispatch = useDispatch();
    const {user} = useFirebase();
    const [demo, setDemo] = useState([])
    useEffect(() => {
        dispatch(GetPymentdata(user.email))
    },[user.email,dispatch, demo])

    const paymentsdata = useSelector((state) => state.flowers.paymentdata);

    const CancelHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Cancel it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(CancelOrder(id))
                setDemo(paymentsdata)
            }
          })
        
    }
    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            <h1 className='hometitle my-4 text-center'>Your Order</h1>
            <div className='container'>
                <Row>
                   <Col lg={7} md={6} sm={12}>
                        {
                            paymentsdata?.map(flower => <Yourorder CancelHandler={CancelHandler} key={flower?._id} flower={flower}></Yourorder>)
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