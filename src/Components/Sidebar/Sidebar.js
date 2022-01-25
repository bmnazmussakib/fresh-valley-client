import React from 'react';
import './Sidebar.css';
import { AiFillAppstore } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';

const Sidebar = () => {
    return (
        <div className="sidebar py-4">

            {/* <Routes className="mt-5">
                <Route path="manageProduct" element={<ManageProduct />} />
                <Route path="addProduct" element={<AddProduct />} />
                <Route path="editProduct" element={<EditProduct />} />
            </Routes> */}

            <h3 className="text-center "><Link to="/" className="sidebar-logo">Fresh Valley</Link></h3>
            <div className="m-auto sidebar-menu">

                {/* <p className="manage-product mt-5"><AiFillAppstore className="me-2 fs-4" /> Manage Product</p> */}
                {/* <ul className="mt-5">
                    <li className="pb-3"><Link to="manageProduct" className="py-3"><AiFillAppstore className="me-2 fs-4" /> Manage Product</Link></li>
                    <li className="py-3"><Link to="addProduct" className="py-3"><BsPlusLg className="me-2" /> Add Product</Link></li>
                    <li className="py-3"><Link to="editProduct" className="py-3"><FaPen className="me-2" /> Edit Product</Link></li>
                </ul> */}



                <ul className="mt-5">
                    <li className="pb-3"><Link to="/manageProduct" className="py-3"><AiFillAppstore className="me-2 fs-4" /> Manage Product</Link></li>
                    <li className="py-3"><Link to="/addProduct" className="py-3"><BsPlusLg className="me-2" /> Add Product</Link></li>
                    <li className="py-3"><Link to="/editProduct" className="py-3"><FaPen className="me-2" /> Edit Product</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Sidebar;