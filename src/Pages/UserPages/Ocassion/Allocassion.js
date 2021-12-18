import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import Usernavbars from '../Usernavbars/Usernavbars'
import { useLocation } from 'react-router-dom';
import Wedding from './Wedding/Wedding';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { OcassionalFlower } from '../../../features/FlowerRedux/FlowerSlice';
import Ocassion from './Ocassion';
import Anniversary from './Anniversary/Anniversary';
import Birthday from './Birthday/Birthday';

const Allocassion = () => {
    const {state} = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(OcassionalFlower(state))
    }, [dispatch, state]);
    const ocassions = useSelector((states) => states.flowers.ocassions )
    console.log('this is ocassion',ocassions, state)
    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            {state === 'wedding' && <Wedding></Wedding>}
            {state === 'anniversary' && <Anniversary></Anniversary>}
            {state === 'birthday' && <Birthday></Birthday>}
                <Row className="justify-content-center">
                    {
                        ocassions.map(ocassion => <Ocassion key={ocassion._id} ocassion={ocassion}></Ocassion>)
                    }
                </Row>
            
            
        </div>
    );
};

export default Allocassion;