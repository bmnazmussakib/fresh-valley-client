import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ManageProduct.css';
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";

const ManageProduct = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch("https://valley-app-server.herokuapp.com/manageProduct")
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [])

    const handleDeleteProduct = (id) => {
        fetch(`https://valley-app-server.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log("deleted successfully");
                console.log(data);
            })
            .catch(err => console.log(err));
        // console.log(typeof(id), id)
    }

    return (
        <div>

            <div className="admin">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <div className="admin-container my-5 addProduct-container">
                    <h3>Manage Content</h3>

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Product Name</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map(pd =>
                                <tr>

                                    <td>{pd.name}</td>

                                    <td>{pd.weight} gm</td>

                                    <td>$ {pd.price}</td>

                                    <td>
                                        <a href="#" className="me-3"><RiEdit2Fill className="text-light p-1 fs-2 rounded" style={{ backgroundColor: '#3BC83B' }} /></a>
                                        <button onClick={() => handleDeleteProduct(pd._id)} className=""><FaTrashAlt className="text-light p-1 fs-2 rounded " style={{ backgroundColor: '#FF444A' }} /></button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;