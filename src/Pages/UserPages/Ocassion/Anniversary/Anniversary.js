import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Anniversary = () => {
    return (
        <Row className="d-flex justify-content-center align-items-center p-4 anniversaryrow">
            <Col  className="p-4 text-center"  lg={5} md={10} sm={12}>
                <h5 className="fw-bold">OUR MOST PERSONAL BOUQUETS</h5>
                <h1 className="hometitle my-3">Anniversary Flowers</h1>
                <p className='regtext'>Flowers convey that special feeling, whether it’s for a certain anniversary or any other occasion to say, “I love you.” No matter how long you’ve been with your partner, BloomsyBox is the perfect gift for your date night of choice.</p>
            </Col>
        </Row>
    );
};

export default Anniversary;