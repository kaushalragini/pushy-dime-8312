import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../Admin/Pages/AdminProducts";
import AdminHomePage from "../Admin/Pages/AdminHomePage";
import Home from "./Home";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminOrderedProducts from "../Admin/Pages/AdminOrderedProducts";
import Signup from "../Components/devarshi/Signup/Signup"
import Navbar from "../Components/nikhil/Navbar";
import Checkout from "../Components/nikhil/CheckoutComp/Checkout";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

          // * Faizal
            <Route path="/admin/products" element={<AdminProducts />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/orders" element={<AdminOrderedProducts />} />
         // * Faizal
        

        <Route path="/admin" element={<AdminHomePage />} />

        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Routing;
