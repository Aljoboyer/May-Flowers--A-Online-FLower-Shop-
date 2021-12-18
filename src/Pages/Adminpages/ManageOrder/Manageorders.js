import React, {useEffect} from 'react';
import { Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { GetOrders } from '../../../features/FlowerRedux/FlowerSlice';
import Order from './Order';
const Manageorders = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetOrders())
    },[dispatch]);

    const orders = useSelector((state) => state.flowers.orders);
    return (
        <Row className='justify-content-center my-4'>
        <h2 className="hometitle text-center my-4">All Customer Order Collection</h2>
    <Table responsive striped bordered hover size="sm">
        <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Flower Name</th>
            <th>Flower Amount</th>
            <th>Delivery Date</th>
            <th>Location</th>

            </tr>
        </thead>
        <tbody>
           {
               orders?.map(order => <Order key={order._id} order={order}></Order>)
           }
        </tbody>
    </Table>
        </Row>
    );
};

export default Manageorders;