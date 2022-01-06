import React from 'react';


const Order = ({order}) => {
    
    return (
        <tr>
        <td>{order.username}</td>
        <td>{order.email}</td>
        <td>{order.flowername}</td>
        <td>{order.floweramount}</td>
        <td>{order.deliverydate}</td>
        <td>{order.location}</td>
        <td><button className='btn regularbtn'>APPROVED</button></td>
        </tr>
    );
};

export default Order;