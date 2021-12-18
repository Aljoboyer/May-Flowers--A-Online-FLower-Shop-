import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Birthday = () => {
    return (
        <Row className="p-4 birthdayrow">
            <Col  className="p-4"  lg={5} md={10} sm={12}>
                <h1 className="hometitle">Birthday Flowers</h1>
                <h5 className="regtext">Celebrate family, friends, and colleagues with the best birthday flowers!</h5>
            </Col>
        </Row>
    );
};

export default Birthday;