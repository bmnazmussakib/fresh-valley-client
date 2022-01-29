import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {

    const [order, setOrder] = useState([]);


    const { login, cart } = React.useContext(UserContext);

    const [loggedInUserValue, setLoggedInUserValue] = login;
    const [cartValue, setCartValue] = cart;

    const [checkoutCart, setCheckoutCart] = useState({});

    fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cartValue
        })
    })

    useEffect(() => {
        fetch('http://localhost:4000/checkout')
            .then(res => res.json())
            .then(data => setCheckoutCart(data))
    }, []);

    // console.log(checkoutCart[0].name);
    // checkoutCart.map(pp => console.log(pp))

    const orderInfo = { name: loggedInUserValue.name, email: loggedInUserValue.email, time: new Date(), price: cart };


    useEffect(() => {
        setOrder(orderInfo);
    }, [])



    const totalPrice = (checkoutCart || []).reduce((accumulator, currentValue) => {
        return accumulator + JSON.parse(currentValue.price);
    }, 0)

    // console.log("totalPrice: ", totalPrice);
    // console.log("cart: ", cart);

    const handleCheckout = () => {

        console.log(order);
    }


    return (
        <div>
            <Header />
            <Container className="">
                <h3 className="my-5">Checkout</h3>
                <table class="table fw-bolder p-5">
                    <thead className="p-5">
                        <tr className="border-bottom-0">
                            <th scope="col" className="fs-5 " style={{ color: "#b1b1b1" }}>Description</th>
                            <th scope="col" className="fs-5 text-center" style={{ color: "#b1b1b1" }}>Weight</th>
                            <th scope="col" className="fs-5 text-center" style={{ color: "#b1b1b1" }}>Price</th>
                        </tr>
                    </thead>

                    {/* <tbody>
                        {cart.map(pd =>
                            <tr>
                                <td className="">{pd.name}</td>

                                <td className="text-center">{pd.weight} gm</td>

                                <td className="text-center">$ {pd.price}</td>
                            </tr>
                        )}
                    </tbody> */}

                    <tbody>
                        <tr>
                            <td>{checkoutCart[0].name}</td>
                            <td className="text-center">{checkoutCart[0].weight}</td>
                            <td className="text-center">$ {checkoutCart[0].price}</td>
                        </tr>
                    </tbody>

                    {/* <tbody>
                        <tr>
                            <td>aaa</td>
                            <td className="text-center">bbb</td>
                            <td className="text-center">$ 555</td>
                        </tr>
                    </tbody> */}

                    <tfoot>
                        <td colspan="2" className="fw-bolder fs-5">Total</td>
                        <td className="fw-bolder fs-5 text-center">$ {totalPrice}</td>
                        {/* <td className="fw-bolder fs-5 text-center">$500</td> */}
                    </tfoot>
                </table>

                <div className="checkout-btn d-flex justify-content-end">
                    <Link to="/orderPlacing">
                        <button className="btn btn-primary btn-lg" onClick={() => handleCheckout()}>Check Out</button>
                        {/* <button className="btn btn-primary btn-lg" >Check Out</button> */}
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;