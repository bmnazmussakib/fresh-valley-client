import React, { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const OrderPlacing = () => {

    const { login, cart } = React.useContext(UserContext);

    const [loggedInUserValue, setLoggedInUserValue] = login;
    const [cartValue, setCartValue] = cart;

    const [order, setOrder] = useState([]);
    const [price, setPrice] = useState('');

    useEffect(() => {
        fetch('http://localhost:4000/checkout')
            .then(res => res.json())
            .then(data => setCartValue(data))
        // .then(data => data.map(data => setCart(data)))
    }, []);




    useEffect(() => {
        cart.map(data => setPrice(data.price))
    }, [])
    console.log("price: ", price, typeof (price));

    useEffect(() => {
        const orderInfo = { name: loggedInUserValue.name, email: loggedInUserValue.email, time: new Date(), price: price };
        console.log(orderInfo);
        setOrder(orderInfo);
    }, [])


    fetch("http://localhost:4000/orderPlacing", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            order
        })
    })

    fetch('http://localhost:4000/delete', {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            // Do some stuff...
        })
        .catch(err => console.log(err));

    return (
        <div>
            <Header></Header>
            <Container className="">
                <h1 className="d-flex align-items-center justify-content-center">Thank you for your order</h1>
            </Container>
        </div>
    );
};

export default OrderPlacing;