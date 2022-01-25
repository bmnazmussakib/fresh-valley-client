import React from 'react';
import './AdminContent.css';
import ManageProduct from '../ManageProduct/ManageProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';

const AdminContent = () => {
    return (
        <div>
                <Routes>
                    <Route path="/manageProduct" element={<ManageProduct />} />
                    <Route path="/addProduct" element={<AddProduct />} />
                    <Route path="/editProduct" element={<EditProduct />} />
                </Routes>
        </div>
    );
};

export default AdminContent;