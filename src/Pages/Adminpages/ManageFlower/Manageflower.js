import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import {  AdminDeleteFlower, GetFlowers } from '../../../features/FlowerRedux/FlowerSlice';
import Manage from './Manage';

const Manageflower = () => {
    const dispatch = useDispatch();
    const [demo, setDemo] = useState([])
    useEffect(() => {
        dispatch(GetFlowers())
    },[dispatch,demo]);

    const flowers = useSelector((state) => state.flowers.allflowers)
console.log(flowers)
    const DeleteHanler = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(AdminDeleteFlower(id))
                setDemo(flowers)
            }
          })
    }
    return (
        <Row className='gap-1 justify-content-center gy-2'>
            <h2 className='hometitle text-center my-4'>Manage All Flowers</h2>
            {
                flowers?.map(flower => <Manage DeleteHanler={DeleteHanler} key={flower._id} flower={flower}></Manage>)
            }
        </Row>
    );
};

export default Manageflower;