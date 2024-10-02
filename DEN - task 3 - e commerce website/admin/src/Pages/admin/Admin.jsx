import React from "react";
import "./admin.css"
import Sidebar from "../../Components/sidebar/Sidebar";
import { Route,Routes } from "react-router-dom";
import AddProduct from "../../Components/addproduct/AddProduct";
import ListProduct from "../../Components/listproduct/ListProduct";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/listproduct" element={<ListProduct />} />

            </Routes>
        </div>
    )
}

export default Admin;