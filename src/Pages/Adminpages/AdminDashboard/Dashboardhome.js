import React from 'react';
import {Row, Col} from 'react-bootstrap'
const Dashboardhome = () => {
    return (
        <Row className="adminhomerow text-center justify-content-center p-4">
            <Col className='p-4' lg={10} md={8} sm={12}>
                <h1 className='hometitle'><span className='spans'>MAY FLOWERS</span></h1>
            </Col>
        </Row>
    );
};

export default Dashboardhome;