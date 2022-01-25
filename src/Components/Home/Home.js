import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import './Home.css';
import { Card, CardGroup, Container } from 'react-bootstrap';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout/Checkout';

const Home = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/manageProduct")
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    // console.log(product);


    const [cart, setCart] = useState({});

    // Add to Cart
    const handleBuyProduct = (id) => {

        const findProduct = product.find(pd => pd._id === id);
        // console.log(findProduct);
        setCart(findProduct);

        fetch("http://localhost:4000/checkout", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                cart
            })
        })
        // console.log(id);

    }

    console.log("cart: ", cart);

    return (
        <div>
            <Header />
            <Container>
                <CardGroup className="row">
                    {product.map(pd => {
                        return (
                            <div className="col-lg-4 col-md-6">
                                <Card className="m-4 border-0 shadow p-3 mb-5 bg-body rounded single-card">
                                    <Card.Img variant="top" src="https://i.ibb.co/YPwBmbt/rsz-1rsz-1kisspng-milo-chocolate-milk-coffee-goat-milk-milo-5b35bf811fe6482087426415302490891307.png" className='w-75 m-auto' />

                                    <Card.Body>
                                        <Card.Title><h5 className="text-center fw-bold">{pd.name} - {pd.weight} KG</h5></Card.Title>
                                        <div className="price d-flex justify-content-evenly mt-4">
                                            <h5 className="d-inline-block fw-bold d-flex align-items-end">$ {pd.price}</h5>
                                            {/* <Link to="/checkout"> */}
                                                <button className="btn btn-primary" onClick={() => handleBuyProduct(pd._id)} >Buy Now</button>
                                            {/* </Link> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        )
                    })
                    }



                </CardGroup>
            </Container>
        </div>
    );
};

export default Home;