import React from 'react';
import { Col, Row } from 'react-bootstrap';
import calender from '../../../../asset/date.png';
import bloom from '../../../../asset/blom.jpg';
import parcentage from '../../../../asset/parcentage.jpg';

const FLowersubscription = () => {
    return (
       <Row className='container-fluid justify-content-center subscriprow p-4'>
            <Row className="p-2">
            <h1 className='text-center hometitle'>Flower Subscriptions</h1>
            <h4 className='text-center fw-bold regtext my-4'>SUBSCRIBE AND SAVE</h4>
            <h5 className='text-center regtext'>A new way to gift fam AND friends in one subscription. Switch up recipients to cover Birthdays, Thank You’s, Just Because AND more!</h5>
            </Row>
           <Row className="p-4 justify-content-center gy-2 gap-3">
            <Col className="text-center subscolam" lg={3} md={6} sm={12}>
                <img className='w-50' src={parcentage} alt="" />
                <h5>UPTO 30% OFF IN EVERY SHIPPING</h5>
                <p>Starting At $40 plus get Special Saving</p>
            </Col>
            <Col className="text-center subscolam" lg={3} md={6} sm={12}>
            <img className='w-50' src={bloom} alt="" />
                <h5>FRESHEST BLOOMS</h5>
                <p>Exclusive firm with freshers flowers and our Happines Guarantee</p>
            </Col>
            <Col className="text-center subscolam" lg={3} md={6} sm={12}>
                <img className='w-50' src={calender} alt="" />
                 <h5>SUPER FLEXIBLE</h5>
                <p>Cuztomize Recupient date, or flower, skip or cancel any time</p>
            </Col>
           </Row>
       </Row>
    );
};

export default FLowersubscription;