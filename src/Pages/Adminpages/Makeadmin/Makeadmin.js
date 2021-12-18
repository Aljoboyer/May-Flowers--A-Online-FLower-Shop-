import React, { useState } from 'react';
import {Row, Col, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { MakingAdmin } from '../../../features/FlowerRedux/FlowerSlice';

const Makeadmin = () => {
    const [adminmail, setAdminmail] = useState('');
    const dispatch = useDispatch()
    const onBlurHandler = (e) => {
        setAdminmail(e.target.value)
    }
    const SubmitHanlder = e => {
        e.preventDefault()
        dispatch(MakingAdmin(adminmail))
        e.target.reset()
    }
    return (
        <Row className="d-flex justify-content-center">
            <h2 className='text-center hometitle my-4'>Make An Amdin</h2>
            <Col className="my-4 addflowerform" lg={8} md={10} sm={12}>
                <Form className="p-4" onSubmit={SubmitHanlder}>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label className="fw-bold">Enter Email</Form.Label>
                    <Form.Control required name="email" onBlur={onBlurHandler}  type="text" placeholder="Enter Email" />
                    </Form.Group>
                    <button className='btn regularbtn mt-4'>Make Admin</button>
                </Form>
            </Col>
        </Row>
    );
};

export default Makeadmin;