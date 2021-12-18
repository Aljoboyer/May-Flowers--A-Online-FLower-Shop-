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
        </tr>
    );
};

export default Order;