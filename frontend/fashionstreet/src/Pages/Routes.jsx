import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../Admin/Pages/AdminProducts";
import AdminHomePage from "../Admin/Pages/AdminHomePage";
import Home from "./Home";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";
import Signup from "../Components/devarshi/Signup/Signup"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
     
      <Route path="/admin/products" element={<AdminProducts />} />
   
      <Route path="/admin" element={<AdminHomePage/>}/>
<Route path="/signup" element={<Signup/>}/>
      <Route path="/products" element={<Products />} /> 
      <Route path="/products/:id" element={<SingleProduct />} /> 
    </Routes>
  );
};

export default Routing;
