import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import AddProductForm from "../Components/AdminProducts/AddProductForm";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";

const AdminProducts = () => {
  return (
    <div>
      <Box border="1px" borderColor="red" h="60px" bgColor="blue.200"></Box>
      <Flex>
        <Box
          border="1px"
          borderColor="red"
          h="100vh"
          w={{ lg: "20%", md: "25%", sm: "30%", base: "0%" }}
          bgColor="red.200"
        ></Box>
        <Box
          border="1px"
          borderColor="red"
          w={{ lg: "80%", md: "75%", sm: "70%", base: "100%" }}
        >
          <Box>
            <ProductModal
              title={"Add New Products"}
              size={"lg"}
              btnText={"Add New Products"}
            >
              <AddProductForm />
            </ProductModal>
          </Box>
          <ProductsCompo />
        </Box>
      </Flex>
    </div>
  );
};

export default AdminProducts;
