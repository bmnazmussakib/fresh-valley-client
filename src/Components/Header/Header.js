import React, { useContext } from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const Header = () => {

    // const {userValue} = useContext(UserContext);
    // const [loggedInUser, setLoggedInUser] = userValue;

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className="my-4">
                <Container>
                    <Navbar.Brand ><Link to="/" className="logo">FRESH VALLEY</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-menu">HOME</Link>
                            <Link to="/orders" className="nav-menu">ORDERS</Link>
                            <Link to="/admin" className="nav-menu">ADMINS</Link>
                            <Link to="/deals" className="nav-menu">DEALS</Link>
                            {/* <Link to="/login" className="nav-menu login">LOGIN</Link> */}
                            {/* {loggedInUser.email ? <Link to="/profile" className="nav-menu"><img src={loggedInUser.img} alt={loggedInUser.name} className="w-50 rounded-circle" /></Link>:<Link to="/login" className="nav-menu login text-light">LOGIN</Link>} */}
                            {loggedInUser.email ? <Link to="/profile" className="nav-menu">
                                <div class="dropdown">
                                    <img src={loggedInUser.img} alt={loggedInUser.name} className="w-50 rounded-circle dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"/>
                                    {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </button> */}
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#" onClick="">Sign Out</a></li>
                                    </ul>
                                </div> </Link> : <Link to="/login" className="nav-menu login text-light">LOGIN</Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;