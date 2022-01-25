import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import './Checkout.css';

const Checkout = () => {

    const [checkoutProduct, setCheckoutProduct] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/checkout')
            .then(res => res.json())
            .then(data => setCheckoutProduct(data))
    }, [])

    console.log("checkoutProduct: ", checkoutProduct);

    return (
        <div>
            <Header />
            <Container className="">
                <h3 className="my-5">Checkout</h3>
                <table class="table fw-bolder p-5">
                    <thead className="p-5">
                        <tr className="border-bottom-0">
                            <th scope="col" className="fs-5 " style={{ color: "#b1b1b1" }}>Description</th>
                            <th scope="col" className="fs-5 text-center" style={{ color: "#b1b1b1" }}>Quantity</th>
                            <th scope="col" className="fs-5 text-center" style={{ color: "#b1b1b1" }}>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mark</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$250</td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td className="text-center">2</td>
                            <td className="text-center">$250</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="2" className="fw-bolder fs-5">Total</td>
                        <td className="fw-bolder fs-5 text-center">$500</td>
                    </tfoot>
                </table>
                <div className="checkout-btn d-flex justify-content-end">
                    <button className="btn btn-primary btn-lg">Check Out</button>
                </div>
            </Container>
        </div>
    );
};

export default Checkout;