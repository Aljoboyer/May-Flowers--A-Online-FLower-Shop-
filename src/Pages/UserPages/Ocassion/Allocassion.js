import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Usernavbars from '../Usernavbars/Usernavbars'
import { useLocation } from 'react-router-dom';
import Wedding from './Wedding/Wedding';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { OcassionalFlower, SeasonalCategory } from '../../../features/FlowerRedux/FlowerSlice';
import Ocassion from './Ocassion';
import Anniversary from './Anniversary/Anniversary';
import Birthday from './Birthday/Birthday';
import Valentines from './Valentines/Valentines';
import Anniversaryqutes from './Anniversary/Anniversaryqutes';
import Birthdayqutes from './Birthday/Birthdayqutes';
import Valentinesqutes from './Valentines/Valentinesqutes';
import Weddingqutes from './Wedding/Weddingqutes';

const Allocassion = () => {
    const {state} = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(OcassionalFlower(state))
    }, [dispatch, state]);
    const FlowerHanlder = (flower) => {
        dispatch(SeasonalCategory(flower))
    }
    const ocassions = useSelector((states) => states.flowers.ocassions )

    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            {state === 'wedding' && <Wedding></Wedding>}
            {state === 'anniversary' && <Anniversary></Anniversary>}
            {state === 'birthday' && <Birthday></Birthday>}
            {state === 'valentines' && <Valentines></Valentines>}
            <Row className="justify-content-center g-2 my-4">
                <Col lg={3} md={6} sm={12}>
                    <button onClick={() => FlowerHanlder('rose')} className='btn categorybtn fw-bold'>ROSE</button>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <button onClick={() => FlowerHanlder('tulip')} className='btn categorybtn fw-bold'>TULIP</button>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <button onClick={() => FlowerHanlder('orchid')} className='btn categorybtn fw-bold'>ORCHID</button>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <button onClick={() => FlowerHanlder('sunflower')} className='btn categorybtn fw-bold'>SUNFLOWERS</button>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {
                    ocassions.map(ocassion => <Ocassion key={ocassion._id} ocassion={ocassion}></Ocassion>)
                }
            </Row>
            {state === 'wedding' && <Weddingqutes></Weddingqutes>}
            {state === 'anniversary' && <Anniversaryqutes></Anniversaryqutes>}
            {state === 'birthday' && <Birthdayqutes></Birthdayqutes>}
            {state === 'valentines' && <Valentinesqutes></Valentinesqutes>}
        </div>
    );
};

export default Allocassion;