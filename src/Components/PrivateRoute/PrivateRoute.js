import React from 'react';
import { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ children}) => {
    
    const { login } = React.useContext(UserContext);

    const [loggedInUserValue, setLoggedInUserValue] = login;

    const location = useLocation();
    return (
        <div>
            { loggedInUserValue.email ? children: <Navigate to="/login" state= { {from: location }} /> }
        </div>
    );
};

export default PrivateRoute;