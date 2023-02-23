import React from "react";
import { Route } from "react-router-dom";
import Products from "../Components/nikhil/Products";
import SingleProduct from "../Components/nikhil/SingleProduct";

const Routes = () => {
  return (
    <Routes>
      <Route path="/" element={"home"} />
      <Route path="/men-fashion" element={"menfashion"} />
      <Route path="/women-fashion" element={"womenfashion"} />
      <Route path="/shop-beauty" element={"shopbeauty"} />
      <Route path="/kid-fashion" />
      <Route path="/" />

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default Routes;
