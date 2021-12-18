import React from 'react';
import { Col, Row } from 'react-bootstrap';
import sixty from '../../../../asset/less60.jpg'
const Undersixty = () => {
    return (
       <Row className="justify-content-center">
           <Col lg={6} md={6} sm={12}>
               <img className='img-fluid' src={sixty} alt="" />
           </Col>
           <Col className="p-2 d-flex justify-content-center align-items-center undersixtycolam" lg={6} md={6} sm={12}>
               <div className='undersixty p-4'>
                <h1 className='hometitle'>Another Year Around the Sun</h1>
                <h5 className='my-4'>Styles that take the cake! Surprise family and friends with bday blooms</h5>
                <button className='btn regularbtn p-2 fs-5'>SHOP UNDER $60</button>
               </div>
           </Col>
       </Row>
    );
};

export default Undersixty;