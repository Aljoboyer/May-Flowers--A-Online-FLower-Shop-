import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Anniversary = () => {
    return (
        <Row className="p-4 anniversaryrow">
            <Col  className="p-4 weddingcolam"  lg={5} md={10} sm={12}>
                <h1 className="weddingtitle text-dark">Anniversary Flowers</h1>
            </Col>
        </Row>
    );
};

export default Anniversary;