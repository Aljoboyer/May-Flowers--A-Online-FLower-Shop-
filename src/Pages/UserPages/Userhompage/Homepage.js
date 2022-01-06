import React from 'react';
import { Row , Col} from 'react-bootstrap';
import Flowers from '../AllFlowers/Flowers';
import Displaymoments from '../Displaymoments/Displaymoments';
import Landaues from '../Landaues/Landaues';
import Usernavbars from '../Usernavbars/Usernavbars';
import FLowersubscription from './FLowersubscription/FLowersubscription';
import './Home.css'
import PassionateFlorist from './PassionateFlorist/PassionateFlorist';
import Undersixty from './Under60/Undersixty';
const Homepage = () => {

    return (
        <div className='container-fluid'>
            <Row className="hometoprow">
                <p className="text-light p-2 text-center fw-bold hometoptxt">Bundle Up! Fresh Gift sets are everyone new favorite holiday treat..</p>
            </Row>
            <Usernavbars></Usernavbars>
            <Row className="d-flex align-items-center homerow p-4">
                <Col className="p-4 homecolam d-flex align-items-center" lg={6} md={6} sm={12}>
                    <div className="p-2">
                    <h1 className="hometitle">Send Holiday Happiness</h1>
                    <h5 className=" my-4">‘Tis the season to celebrate w/ festive flowers, plants + gifts for your faves!</h5>
                    <button className='btn regularbtn p-2 fs-5'>SHOP NOW</button>
                    </div>
                    
                </Col>
            </Row>
            <FLowersubscription></FLowersubscription>
            <Flowers></Flowers>
            <Undersixty></Undersixty>
            <Landaues></Landaues>
            <PassionateFlorist></PassionateFlorist>
            <Displaymoments></Displaymoments>
        </div>
    );
};

export default Homepage;