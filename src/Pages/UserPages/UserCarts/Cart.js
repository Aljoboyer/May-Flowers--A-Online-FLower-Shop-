import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Cart = ({flower, DeleteHandler}) => {

   
    return (
      <Row>
         <Col lg={7} md={6} sm={12}>
             <img className='w-75 rounded' src={`data:image/jpeg;base64,${flower.flowerimg}`}  alt="" />
         </Col>
         <Col className="d-flex align-items-center" lg={5} md={6} sm={12}>
             <Row>
             <h5>Flower Ordered: {flower.floweramount}</h5>
             <h5 className="my-4">Amount: {flower.singletotal}</h5>
             <h5 className="my-4">Delivery Date: {flower.deliverydate}</h5>
             <button onClick={() => DeleteHandler(flower._id)} className='btn btn-dark text-warning'>Remove</button>
             </Row>
         </Col> 

      </Row>
    );
};

export default Cart;
