import React from 'react';
import { Row , Col} from 'react-bootstrap';
import flowergiph from '../../../../asset/flowergihpy.gif';

const PassionateFlorist = () => {
    return (
        <Row className="container-fluid justify-content-center">
            <Col lg={6} sm={12} md={6}>
                <img className='w-100 h-100' src={flowergiph} alt="" />
            </Col>
            <Col className='p-4 d-flex align-items-center' lg={6} sm={12} md={6}>
                <div>
                <h4 className='passionateText fw-bold fs-1'>Are you a passionate local florist?</h4>
                <p className='regtext fs-5'>We’re always looking for talented independent florists to join the Floom family!
                As one of our partners you’ll get to keep your independence and identity while reaching more local flower lovers than ever before, thanks to our loyal and ever-growing audience.</p>
                <button className='btn passionatebtn fw-bold fs-5'>PARTNER WITH US</button>
                </div>
            </Col>
        </Row>
    );
};

export default PassionateFlorist;