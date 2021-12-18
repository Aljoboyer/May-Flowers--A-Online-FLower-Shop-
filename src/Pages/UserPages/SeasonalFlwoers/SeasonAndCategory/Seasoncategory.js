import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
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
    const flowers = useSelector((states) => states.flowers.ocassions )

    return (
        <div className='container-fluid'>
            <Usernavbars></Usernavbars>
            {state === 'spring' && <Spring></Spring>}
            {state === 'summer' && <Summer></Summer>}
                <Row className="justify-content-center">
                    {
                        flowers.map(flower => <Season key={flower._id} flower={flower}></Season>)
                    }
                </Row>
        </div>
    );
};

export default SeasonsCategory;