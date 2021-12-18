import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Usernavbars from '../../UserPages/Usernavbars/Usernavbars';
import useFirebase from '../FirebaseAuthentication/Firebaseauth';
import '../Shared.css'
const Login = () => {
    const [formdata, setFormdata] = useState({});
    const {LoginUser, logerror} = useFirebase();

    const location = useLocation()
    const navigate = useNavigate();

    const onblurHandler = e => {
        const fieldname = e.target.name;
        const fieldvalue = e.target.value;

        const newdata = {...formdata};
        newdata[fieldname] = fieldvalue;
        setFormdata(newdata)
    }

    const SubmitHanlder = (e) => {
        e.preventDefault()
        LoginUser(formdata.email, formdata.password, navigate, location)
    }
    return (
        <div className="container-fluid">
        <Usernavbars></Usernavbars>
        <Row className="algin-items-center justify-content-center ">
            <Col lg={7} sm={12} md={8} className="login my-4 p-4">
                <h5 className="text-danger fw-bold">{logerror}</h5>
            <h3 className="my-4 hometitle">Log in May Flowers</h3>
                <form onSubmit={SubmitHanlder}>
                <Form.Floating className="mb-3 fw-bold text-primary">
                <Form.Control
                className="w-75"
                id="floatingInputCustom"
                type="email"
                name="email"
                onBlur={onblurHandler}
                placeholder="Your Email address"
                required
                />
                <label className="fw-bold text-primary" htmlFor="floatingInputCustom">Your Email address</label>
                </Form.Floating>
            <Form.Floating className="fw-bold text-primary">
                <Form.Control className="w-75"
                id="floatingPasswordCustom"
                type="password"
                name="password"
                onBlur={onblurHandler}
                placeholder="Password"
                required
                />
                <label htmlFor="floatingPasswordCustom">Your Password</label>
            </Form.Floating>
            <button type="submit" className="btn regularbtn text-light p-3 fw-bold rounded my-3" >Login</button>
                </form>

                <Link className="fw-bold springtxt fs-6" to="/register">Are New Here ? Register Please</Link>
            </Col>
        </Row>
    </div>
    );
};

export default Login;