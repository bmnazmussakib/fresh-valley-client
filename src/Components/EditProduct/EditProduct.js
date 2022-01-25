import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const EditProduct = () => {
    return (
        <div>

            <div className="admin">
                <div className="sidebar-container">
                    <Sidebar />
                </div>

                <div className="admin-container my-5 addProduct-container">
                    <h3>Edit Content</h3>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;