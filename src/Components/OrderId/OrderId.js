import React, { useEffect, useState } from 'react';
import './OrderId.css';

const OrderId = (props) => {

    const {orders} = props;
    console.log("orders id: ", orders);

    return (
        <div>
            <p className="fs-5 order-id">Order #{ orders[0]._id }</p>
            <p className="fs-5 order-id">Time: { orders[0].time }</p>
        </div>
    );
};

export default OrderId;