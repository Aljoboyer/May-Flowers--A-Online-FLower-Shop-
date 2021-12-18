import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Valentines = () => {
    return (
        <Row className="p-4 valentinesrow d-flex justify-content-center align-items-center">
            <Col  className="p-4"  lg={5} md={10} sm={12}>
                <h1 className="hometitle text-dark">Valentines Flowers</h1>
                <h5 className="regtext">Celebrate with Your soulmate with the best birthday flowers!</h5>
            </Col>
        </Row>
    );
};

export default Valentines;