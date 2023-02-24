import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminHomePage from "../Admin/Pages/AdminHomePage";


// import AdminProducts from "../Admin/Pages/AdminProducts";
import Home from "./Home";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";


const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men-fashion" element={"menfashion"} />
      <Route path="/women-fashion" element={"womenfashion"} />
      <Route path="/shop-beauty" element={"shopbeauty"} />
      <Route path="/kid-fashion" />
      <Route path="/" />
      <Route path="/admin" element={<AdminHomePage/>}/>

      {/* <Route path="/admin/products" element={<AdminProducts />} /> */}

      {/* <Route path="/products" element={<Products />} /> */}
      {/* <Route path="/products/:id" element={<SingleProduct />} /> */}
    </Routes>
  );
};

export default Routing;

