import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Sidebar from '../Sidebar/Sidebar';


const AddEdit = () => {

    const { id } = useParams();

    const navigate = useNavigate();

    const [imgURL, setImgURL] = useState('');

    const [product, setProduct] = useState({
        name: "", weight: "", price: ""
    });
    let name, value;

    let productInfo = { ...product, imgURL }
    console.log("productInfo: ", productInfo);

    useEffect(() => {
        axios.get(`http://localhost:4000/editProduct/${id}`)
            .then((response) => {
                setProduct({ name: response.data[0].name, weight: response.data[0].weight, price: response.data[0].price });
                setImgURL(response.data[0].imgURL);
            })
    }, [id])


    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;


        setProduct({ ...product, [name]: value })
    }

    // Add Product button
    const handleSubmit = (e) => {

        const { name, weight, price, imgURL } = productInfo;

        if (!id) {
            if (!name || !weight || !price || !imgURL) {
                toast.error("Please fill up the input");
            } else {
                axios.post("http://localhost:4000/addProduct", {
                    name,
                    weight,
                    price,
                    imgURL
                }).then(() => {
                    productInfo = ({ name: "", weight: "", price: "" }, { imgURL: "" })
                }).catch((err) => toast.error(err.response.data))

                toast.success("Product added successfully");
                setTimeout(() => navigate('/manageProduct'), 500)
            }
        } else {
            if (!name || !weight || !price || !imgURL) {
                toast.error("Please fill up the input");
            } else {
                axios.put(`http://localhost:4000/editProduct/${id}`, {
                    name,
                    weight,
                    price,
                    imgURL
                }).then(() => {
                    productInfo = ({ name: "", weight: "", price: "" }, { imgURL: "" })
                }).catch((err) => toast.error(err.response.data))

                toast.success("Product updated successfully");
                setTimeout(() => navigate('/manageProduct'), 500)
            }
        }






        e.preventDefault();
    }


    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imgData = new FormData();
        imgData.set('key', '9dce04044780a8e8c6cbf435542ead0b');
        imgData.append('image', event.target.files[0]);

        const requestOptions = {
            method: 'POST',
            body: imgData
        };

        fetch('https://api.imgbb.com/1/upload', requestOptions)
            .then(response => response.json())
            .then(data => {
                setImgURL(data.data.display_url)
                // console.log(data.data.display_url)
            })
            .catch(error => {
                console.error(error)
            });
    }

    // console.log("imageURL: ", imgURL, typeof (imgURL))

    return (
        <div>
            <div className="admin">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <div className="admin-container my-5 addProduct-container">
                    <h3 className="mb-5">{id ? "Update" : "Add"} Product</h3>

                    {/* Form */}
                    <form action="/addProduct" method="POST" class="row g-4 needs-validation mt-5">
                        <div className="row col-12 mb-4">
                            <div class="col-md-6">
                                <label for="name" class="form-label">Product Name</label>
                                <input type="text" class="form-control" name="name" id="name" onChange={handleInputs} required value={productInfo.name || ""} />
                            </div>

                            <div class="col-md-6">
                                <label for="weight" class="form-label">Weight</label>
                                <input type="number" class="form-control" name="weight" id="weight" onChange={handleInputs} required value={productInfo.weight || ""} />
                            </div>
                        </div>

                        <div className="row col-12 mb-3">
                            <div class="col-md-6">
                                <label for="price" class="form-label">Add Price</label>
                                <input type="number" class="form-control" name="price" id="price" onChange={handleInputs} required value={productInfo.price || ""} />
                            </div>

                            <div class="col-md-6">
                                <label for="uploadImg" class="form-label">Upload Image</label>
                                <input type="file" class="form-control" id="uploadImg" onChange={handleImageUpload} required />
                            </div>
                        </div>

                        <div class="col-12">
                            {/* <button onClick={handleSubmit} class="btn btn-primary add-product-btn" type="submit">Add Product</button> */}
                            <input onClick={handleSubmit} class="btn btn-primary add-product-btn" type="submit" value={id ? "Update" : "Submit"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEdit;