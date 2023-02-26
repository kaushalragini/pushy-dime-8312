import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AdminProducts from "../Admin/Pages/AdminProducts";

import Home from "./Home";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";

import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminOrderedProducts from "../Admin/Pages/AdminOrderedProducts";
import Signup from "../Components/devarshi/Signup/Signup";
import Navbar from "../Components/nikhil/Navbar";
import Checkout from "../Components/nikhil/CheckoutComp/Checkout";
import Login from "../Components/devarshi/Login/Login";
import AdminSignup from "../Components/devarshi/Admin/AdminSignup";
import OrderStatus from "../Components/prince/OrderStatus";
import AdminHomePage from "../Admin/Pages/AdminHomePage";
const Routing = () => {
  return (
    <>
      <Routes>
 <Route path="/order/status" element={
           <>
              <Navbar />
              <OrderStatus/>
            </>
 }/>
 <Route path="/admin/signup" element={
 
            <>
              <Navbar />
              <AdminSignup/>
            </>
 }/>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />

        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/orders" element={<AdminOrderedProducts />} />
        <Route path="/admin" element={<AdminHomePage />} />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Navbar />
              <Signup />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Navbar />
              <SingleProduct />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar />
              <Checkout />
            </>
          }
        />

      </Routes>
    </>

  );
};

export default Routing;
