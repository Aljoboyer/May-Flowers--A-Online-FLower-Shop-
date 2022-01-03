import React, { useEffect } from 'react';
import { Row , Col} from 'react-bootstrap';
import Usernavbars from '../../Usernavbars/Usernavbars';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Season from './Season';
import { SeasonalCategory } from '../../../../features/FlowerRedux/FlowerSlice';
import Spring from '../Spring/Spring';
import Summer from '../Summer/Summer';


const SeasonsCategory = () => {
    const {state} = useLocation();
    const dispatch = useDispatch()
    useEffect(() => {
       dispatch(SeasonalCategory(state))
    }, [dispatch, state]);
    
    const FlowerHanlder = (flower) => {
        dispatch(SeasonalCategory(flower))
    }

    const flowers = useSelector((states) => states.flowers.ocassions )

    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            {state === 'spring' && <Spring></Spring>}
            {state === 'summer' && <Summer></Summer>}
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
                        flowers.map(flower => <Season key={flower._id} flower={flower}></Season>)
                    }
                </Row>
        </div>
    );
};

export default SeasonsCategory;