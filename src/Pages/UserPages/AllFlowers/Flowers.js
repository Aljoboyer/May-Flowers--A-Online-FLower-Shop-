import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { GetFlowers } from '../../../features/FlowerRedux/FlowerSlice';
import Flower from './Flower';

const Flowers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetFlowers())
    },[dispatch])
    const flowers = useSelector((state) => state.flowers.allflowers);
 
    return (
        <Row className="justify-content-center gap-2 my-4">
            {
                flowers.map(flower => <Flower key={flower._id} flower={flower}></Flower>)
            }
        </Row>
    );
};

export default Flowers;