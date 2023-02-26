import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import AdminProducts from "../Admin/Pages/AdminProducts";
import AdminHomePage from "../Admin/Pages/AdminHomePage";
import Home from "./Home";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminOrderedProducts from "../Admin/Pages/AdminOrderedProducts";
import Signup from "../Components/devarshi/Signup/Signup";
import Navbar from "../Components/nikhil/Navbar";
import Checkout from "../Components/nikhil/CheckoutComp/Checkout";
import Login from "../Components/devarshi/Login/Login";

const Routing = () => {
  return (
    <>
      <Routes>
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
