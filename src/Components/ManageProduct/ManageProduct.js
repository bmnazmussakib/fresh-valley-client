import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './ManageProduct.css';
import { RiEdit2Fill } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

const ManageProduct = () => {

    

    const [product, setProduct] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/manageProduct");
        setProduct(response.data)
    }

    useEffect(() => {

        loadData();

    }, [])

    const handleDeleteProduct = (id) => {
        if(window.confirm("Are you sure want delete?")){
            axios.delete(`http://localhost:4000/delete/${id}`);
            toast.success("Product Deleted Successfully");
            setTimeout(()=> loadData(), 500)
        }
    }

    const handleUpdate = (id) => {
        console.log("Update Cliked", id);
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
                                        <Link to={`/editProduct/${pd._id}`}><button onClick={() => handleUpdate(pd._id)} className="btn"><RiEdit2Fill className="text-light p-1 fs-2 rounded" style={{ backgroundColor: '#3BC83B' }} /></button></Link>
                                        <button onClick={() => handleDeleteProduct(pd._id)} className="btn"><FaTrashAlt className="text-light p-1 fs-2 rounded " style={{ backgroundColor: '#FF444A' }} /></button>
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