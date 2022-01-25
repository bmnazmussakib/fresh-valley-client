import './App.css';
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin';
import NotFound from './Components/NotFound/NotFound';
import Checkout from './Components/Checkout/Checkout';
import AddProduct from './Components/AddProduct/AddProduct';
import EditProduct from './Components/EditProduct/EditProduct';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import React from 'react';
import { useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = React.createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (

    // <UserContext.Provider value={{userValue:[loggedInUser, setLoggedInUser]}}>
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
            <Route path="/admin" element={<PrivateRoute><ManageProduct /></PrivateRoute>} />
            <Route path="/manageProduct" element={<PrivateRoute><ManageProduct /></PrivateRoute>} />
            <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
            <Route path="/editProduct" element={<PrivateRoute><EditProduct /></PrivateRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
