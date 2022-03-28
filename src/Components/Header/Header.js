import React, { useContext } from 'react';
import './Header.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { signOut } from 'firebase/auth';



const Header = () => {

    const navigate = useNavigate();
    const { login } = React.useContext(UserContext);

    const [loggedInUserValue, setloggedInUserValue] = login;

    const token = localStorage.getItem('token');
   function  signOut(){
    if(token){
    localStorage.removeItem('token')
    }

     }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="" variant="" className="my-4">
                <Container>
                    <Navbar.Brand ><Link to="/" className="logo">SHOE VALLEY</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link to="/" className="nav-menu">HOME</Link>
                            <Link to="/orders" className="nav-menu">ORDERS</Link>
                            <Link to="/admin" className="nav-menu">ADMINS</Link>
                            <Link to="/deals" className="nav-menu">DEALS</Link>
                            {/* {loggedInUserValue.email ? <Link to="/profile" className="nav-menu">
                                <div class="dropdown">
                                    <img src={loggedInUserValue.img} alt={loggedInUserValue.name} className="w-50 rounded-circle dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false"/>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a class="dropdown-item" href="#">Profile</a></li>
                                        <li><a class="dropdown-item" href="#" onClick="">Sign Out</a></li>
                                    </ul>
                                </div> </Link>    : <Link to="/login" className="nav-menu login text-light">LOGIN</Link>  } */}

                           

                                        {token ?
                                           <Link to="/" onClick={signOut}  className="nav-menu login text-light">
                                            Sign Out 
                                         </Link> :
                                          <Link to="/login" className="nav-menu login text-light">LOGIN</Link>}
                                     
                                  

                               
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;