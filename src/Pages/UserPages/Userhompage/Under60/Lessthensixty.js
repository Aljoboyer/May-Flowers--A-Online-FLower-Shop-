import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import LTsixty from './LTsixty';
import Usernavbars from '../../Usernavbars/Usernavbars';
import { GetFlowersLTSixty } from '../../../../features/FlowerRedux/FlowerSlice';

const Lessthensixty = () => {
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetFlowersLTSixty())
    },[dispatch]);

    const flowers = useSelector((state) => state.flowers.ltsixty);
console.log('this from un60', flowers)
    return (
        <Row className="justify-content-center my-4">
            <Usernavbars></Usernavbars>
            <Row className='my-4 justify-content-center align-items-center undersixtyrow p-4'>
                <Col className='p-4' lg={7} md={8} sm={12}>
                    <h1 className='hometitle'>BUY FLOWERS UNDER $60</h1>
                </Col>
            </Row>

                {
                flowers?.map(flower => <LTsixty key={flower._id} flower={flower}></LTsixty>)
                }
        </Row>
    );
};

export default Lessthensixty;