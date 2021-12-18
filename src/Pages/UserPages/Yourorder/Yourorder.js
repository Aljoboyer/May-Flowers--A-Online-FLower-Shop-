import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Yourorder = ({flower}) => {
    return (
     <>
        <Row className='mt-4'>
            <Col lg={5} md={6} sm={12}>
                <img className='img-fluid' src={`data:image/jpeg;base64,${flower?.flowerimg}`} alt="" />
                <h4 className="my-4">{flower?.flowername}</h4>
            </Col>
            <Col lg={5} md={6} sm={12}>
                <h5>Flower Amount: {flower?.floweramount}</h5>
                <h5>Amount: {flower?.singletotal}</h5>
                <h5>Delivery Date: {flower?.deliverydate}</h5>
            </Col>
        </Row>
        <hr />
     </>
    );
};

export default Yourorder;