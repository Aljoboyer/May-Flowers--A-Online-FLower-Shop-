import React from 'react';
import { Row , Col} from 'react-bootstrap';
import '../ocassion.css';
const Wedding = () => {

    return (
        <div className='container-fluid'>
            <Row className='d-flex justify-content-center align-items-center p-4 weddingrow'>
                <Col className="p-4 weddingcolam" lg={6} md={12} sm={12}>
                <h1 className='weddingtitle'>Wedding Flowers You'll Love</h1>
                <h4 className='text-white'>Get the wedding flowers of your dreams and stick to your budget. Start by browsing our stunning wedding flower collections or talking to our floral stylists to get matched to the florals that are right for you.</h4>
                </Col>
            </Row>
            <Row className='my-4'>
                <h1 className='fw-bold fs-2 regtext'>Wedding Collections</h1>
                <h5 className='regtext'>The Bouqs Co. Weddings AND Events specializes in farm-fresh wedding flower delivery. Each of our wedding flower collections are sustainably-sourced and comes in a variety of colors, seasons, and styles. Choose between having your flowers arrive fully arranged and wedding-ready or in loose stems for you to do-it-yourself. For couples looking for truly unique wedding bouquets, our floral stylists can help customize your order with recommendations from our Wholesale Catalog.</h5>
            </Row>
        </div>
    );
};

export default Wedding;