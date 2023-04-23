import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProducts from "../Admin/Pages/AdminProducts";
import Navbar from "../Components/nikhil/Navbar";

import Home from "./Home";
import Signup from "../Components/devarshi/Signup/Signup";
import Login from "../Components/devarshi/Login/Login";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";
import Checkout from "../Components/nikhil/CheckoutComp/Checkout";
import OrderStatus from "../Components/prince/OrderStatus";

import AdminSignup from "../Components/devarshi/Admin/AdminSignup";
import AdminHomePage from "../Admin/Pages/AdminHomePage";
import AdminUsers from "../Admin/Pages/AdminUsers";
import AdminOrderedProducts from "../Admin/Pages/AdminOrderedProducts";
import AdminFeedback from "../Admin/Pages/AdminFeedback";
import PrivateRoute from "./PrivateRoute";

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
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
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
            <PrivateRoute>
              <>
                <Navbar />
                <Checkout />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/order/status"
          element={
            <PrivateRoute>
              <>
                <Navbar />
                <OrderStatus />
              </>
            </PrivateRoute>
          }
        />

        {/*=============== ADMIN ROUTES ==================== */}

        <Route path="/admin" element={<AdminHomePage />} />
        <Route
          path="/admin/signup"
          element={
            <>
              <Navbar />
              <AdminSignup />
            </>
          }
        />

        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/users" element={<AdminUsers />} />
        <Route path="/admin/orders" element={<AdminOrderedProducts />} />
        <Route path="/admin/feedback" element={<AdminFeedback />} />
      </Routes>
    </>
  );
};

export default Routing;
