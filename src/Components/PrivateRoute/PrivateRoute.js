import React from 'react';
import { useContext } from 'react';
import { Navigate, Route, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';


const PrivateRoute = ({ children}) => {
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const location = useLocation();
    return (
        <div>
            { loggedInUser.email ? children: <Navigate to="/login" state= { {from: location }} /> }
        </div>
    );
};

export default PrivateRoute;