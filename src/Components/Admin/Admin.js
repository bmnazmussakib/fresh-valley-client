import React from 'react';
import './Admin.css';
import Sidebar from '../Sidebar/Sidebar';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import AdminContent from '../AdminContent/AdminContent';
import { Route, Routes } from 'react-router-dom';
import EditProduct from '../EditProduct/EditProduct';


const Admin = () => {



    return (
        <div>
            {/* <Routes className="mt-5">
                <Route path="manageProduct" element={<ManageProduct />} />
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="editProduct" element={<EditProduct />} />
            </Routes> */}

            <div className="admin">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <div className="admin-container">
                    <h1>Admin</h1>
                </div>


            </div>
        </div>
    );
};

export default Admin;