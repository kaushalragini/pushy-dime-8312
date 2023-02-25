import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { getProducts } from "../../../Redux/AdminProducts/AdminProducts.actions";
import ProductsTable from "./ProductsTable";

const ProductsCompo = () => {
  const { Toast } = useToastCompo();

  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.adminProductsManager);

  useEffect(() => {
    dispatch(getProducts(Toast));
  }, []);

  return (
    <div>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsCompo;
