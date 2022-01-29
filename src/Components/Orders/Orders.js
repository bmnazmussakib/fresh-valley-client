import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import OrderId from '../OrderId/OrderId';
import OrderPicture from '../OrderPicture/OrderPicture';

const Orders = () => {

    const [orders, setOrders] = useState({});
    useEffect(() => {
        fetch('http://localhost:4000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    return (
        <div>
            <Header />
            <Container>
                <div className="order-container w-75 m-auto">
                    <div class="card">
                        <h5 class="card-header">Orders</h5>
                        <div class="card-body d-flex justify-content-around">
                            <OrderPicture orders={orders} />
                            <OrderId orders={orders} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Orders;