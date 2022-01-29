import React, { useState } from 'react';
import './AddProduct.css';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "", weight: "", price: ""
    });
    let name, value;

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setProduct({...product, [name]:value})
    }

    // Add Product button
    const handleAddProduct = (e) => {

        const {name, weight, price} = product;

        fetch('https://valley-app-server.herokuapp.com/addProduct', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name, weight, price
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 422 || !data) {
                window.alert("Invalid Data")
                } else {
                    window.alert("Data insert successfully");

                    navigate.push('/addProduct');
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <div className="admin">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <div className="admin-container my-5 addProduct-container">
                    <h3 className="mb-5">Add Content</h3>

                    {/* Form */}
                    <form action="/addProduct" method="POST" class="row g-4 needs-validation mt-5">
                        <div className="row col-12 mb-4">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Product Name</label>
                                <input type="text" class="form-control" name="name" id="name" onChange={handleInputs} required />
                            </div>

                            <div class="col-md-6">
                                <label for="weight" class="form-label">Weight</label>
                                <input type="text" class="form-control" name="weight" id="weight" onChange={handleInputs} required />
                            </div>
                        </div>

                        <div className="row col-12 mb-3">
                            <div class="col-md-6">
                                <label for="price" class="form-label">Add Price</label>
                                <input type="number" class="form-control" name="price" id="price" onChange={handleInputs} required />
                            </div>

                            {/* <div class="col-md-6">
                                <label for="uploadImg" class="form-label">Upload Image</label>
                                <input type="file" class="form-control" id="uploadImg" required />
                            </div> */}
                        </div>

                        <div class="col-12">
                            <button onClick={handleAddProduct}class="btn btn-primary add-product-btn" type="submit">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;