import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css' 
const Footer = () => {
    return (
        <Row className='justify-content-center g-3 footerrow p-4'>
            <Col lg={3} md={6} sm={12}>
                <h5>THE MAY FLOWERS CO.</h5>
                <p>About Us</p>
                <p>Our Difference</p>
                <p>Community Matters</p>
                <p>Press</p>
                <p>MAY Flowers Video</p>
                <p>Blog</p>
                <p>Site Map</p>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h5>ADDITIONAL SERVICESADDITIONAL SERVICES</h5>
                <p>Refer A Friend</p>
                <p>Weddings</p>
                <p>Business Services</p>
                <p>Coupons</p>
                <p>Deal of the Week</p>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h5>WORK WITH US</h5>
                <p>Jobs</p>
                <p>Affiliates</p>
                <p>RETAIL</p>
                <p>Retail Locations</p>
            </Col>
            <Col lg={3} md={6} sm={12}>
            <h5>HELP</h5>
                <p>Flower Care</p>
                <p>Help Center</p>
                <p>Shipping</p>
                <p>Terms of Use</p>
                <p>Accessibility</p>
                <p>Privacy Policy</p>
                <p>Do Not Sell My Information</p>
            </Col>
        </Row>
    );
};

export default Footer;