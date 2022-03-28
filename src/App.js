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
import OrderPlacing from './Components/OrderPlacing/OrderPlacing';
import AddEdit from './Components/AddEdit/AddEdit';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UserContext = React.createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});
  const providerValue = { login: [loggedInUser, setLoggedInUser], cart: [cart, setCart] }



  return (

    // <UserContext.Provider value={providerValue}>
    <UserContext.Provider value={providerValue}>


      <div>
        
          <BrowserRouter>
          <ToastContainer />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />


              <Route path="/login" element={<Login />} />

              {/* <Route path="/checkout" element={<Checkout />} /> */}
              <Route path="/orderPlacing" element={<PrivateRoute><OrderPlacing /></PrivateRoute>} />
              <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
              
              {/* <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} /> */}
              <Route path="/admin" element={<PrivateRoute><ManageProduct /></PrivateRoute>} />
              <Route path="/manageProduct" element={<PrivateRoute><ManageProduct /></PrivateRoute>} />

              {/* <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} /> */}
              <Route path="/addProduct" element={<PrivateRoute><AddEdit /></PrivateRoute>} />

              {/* <Route path="/editProduct" element={<PrivateRoute><EditProduct /></PrivateRoute>} /> */}
              <Route path="/editProduct/:id" element={<PrivateRoute><AddEdit /></PrivateRoute>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        
      </div>

    </UserContext.Provider >
  );
}

export default App;
