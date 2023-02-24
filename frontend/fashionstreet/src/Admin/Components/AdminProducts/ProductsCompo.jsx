import { Grid, GridItem, useToast } from "@chakra-ui/react";
import { CommentsDisabledOutlined } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsTable from "./ProductsTable";

const ProductsCompo = () => {
  const [products, setProducts] = useState([]);
  const toast = useToast();

  useEffect(() => {
    getAllProducts();
  }, []);
  const getAllProducts = async () => {
    try {
      const data = await axios.get(`${process.env.REACT_APP_URL}/products/all`);

      if (data?.data) {
        setProducts(data?.data?.data);
      }
    } catch (err) {
      toast({
        title: `${err?.response?.data?.msg}`,
        status: "error",
        position: "top",
        isClosable: true,
      });
      console.error(err);
    }
  };

  return (
    <div>
      <ProductsTable products={products} />
    </div>
  );
};

export default ProductsCompo;
