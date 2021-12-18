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
    const allflower = useSelector((state) => state.flowers.allflowers);
    const flowers = allflower.slice(0,6)
    return (
        <Row className="justify-content-center gap-2 my-4">
            {
                flowers.map(flower => <Flower key={flower._id} flower={flower}></Flower>)
            }
        </Row>
    );
};

export default Flowers;