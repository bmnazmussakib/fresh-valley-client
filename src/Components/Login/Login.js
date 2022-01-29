import React, { useContext } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import './Login.css';
import { FcGoogle } from 'react-icons/fc';
import { getAuth, signInWithPopup, GoogleAuthProvider, getRedirectResult } from "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { initializeApp } from "firebase/app";
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';




const Login = () => {

    const { login } = React.useContext(UserContext);

    const [loggedInUserValue, setLoggedInUserValue] = login;


    const navigate = useNavigate();
    const location = useLocation();

    const { from } = location.state || { from: { pathname: '/' } };



    const app = initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // console.log(result.user);
                const { displayName, email, photoURL } = result.user;

                localStorage.setItem('email', email);
                localStorage.setItem('displayName', displayName);
                localStorage.setItem('photoURL', photoURL);

                const signedInUser = { name: localStorage.getItem('displayName'), email: localStorage.getItem('email'), img: localStorage.getItem('photoURL') };
                console.log(signedInUser);
                
                setLoggedInUserValue(signedInUser);
                navigate(from);

            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });

    }




    return (
        <>
            <Header />
            <Container>
                <div className="social-login text-center d-grid gap-2 m-auto">
                    <button onClick={handleGoogleSignIn} className="google border py-2" ><FcGoogle className="fs-2" /><span className="ms-5">Continue with Google</span></button>
                </div>
                <p class="text-center">or</p>

                <div className="login-form w-50 m-auto border rounded px-5 mb-3">
                    <form className="py-5">
                        <h4 className="mb-5">Login</h4>
                        <div class="mb-5">
                            <input type="email" class="form-control border-start-0 border-end-0 border-top-0" id="email" placeholder="Username or Email" />
                        </div>
                        <div class="mb-5">
                            <input type="password" class="form-control border-start-0 border-end-0 border-top-0" id="password" placeholder="Password" />
                        </div>
                        <div class="mb-5 form-check d-flex justify-content-between">
                            <div>
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <a href="#" style={{ color: '#71BA58' }}>Forgot Password</a>
                        </div>
                        <div class="d-grid gap-2 mb-3">
                            <button class="btn btn-primary login-btn p-2" type="submit">Login</button>
                        </div>
                        <div class="text-center">

                            <p>Don't have an account? <a href="#" style={{ color: '#71BA58' }}>Create an account</a></p>
                        </div>
                    </form>
                </div>


            </Container>
        </>
    );
};

export default Login;