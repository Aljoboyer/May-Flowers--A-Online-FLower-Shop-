import React, { useEffect, useState } from 'react';
import {Row, Col, Table, Card} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { DeleteCartItem, GetCart } from '../../../features/FlowerRedux/FlowerSlice';
import useFirebase from '../../SharedPages/FirebaseAuthentication/Firebaseauth';
import Payment from '../Payments/Payment';
import Usernavbars from '../Usernavbars/Usernavbars';
import Cart from './Cart';
import './Usecart.css';

const Usercart = () => {
    const {user} = useFirebase()
    const dispatch = useDispatch();
    const [demo, setDemo] = useState([])
    useEffect(() => {
        dispatch(GetCart(user.email))
    },[user.email, dispatch, demo])
    const carts = useSelector((state) => state.flowers.usercarts);
    
    let totalamount = 0;
    let totalflower = 0;
    for(let flower of carts){
        totalamount = totalamount + parseInt(flower.singletotal);
        totalflower = totalflower + parseInt(flower.floweramount);
    }
 const DeleteHandler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(DeleteCartItem(id))
                setDemo(carts)
            }
          })
    }
    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            <h1 className='hometitle my-4 text-center'>Your Cart</h1>
            <Row className='justify-content-center'>
                <Col className="" lg={6} md={12} sm={12}>
                    {
                        carts?.map(flower => <Cart key={flower._id}
                            DeleteHandler={DeleteHandler} flower={flower}></Cart>)
                    }
                </Col>
                <Col  lg={6} md={12} sm={12}>
                    <Row >
                    {
                        totalamount > 0 && <Payment carts={carts} totalflower={totalflower} totalamount={totalamount}></Payment>
                    }
                    </Row>
                </Col>
            </Row>
        </div>
    );
};

export default Usercart;