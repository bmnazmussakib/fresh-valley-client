import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const NotFound = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h1 className="text-center text-danger">404! Page not found</h1>
            </Container>
        </div>
    );
};

export default NotFound;