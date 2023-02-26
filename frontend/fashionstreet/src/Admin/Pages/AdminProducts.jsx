import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import AddProductForm from "../Components/AdminProducts/AddProductForm";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const AdminProducts = () => {
  return (
    <div>
      <Navbar />
      <Flex>
        <Sidebar
          color={"hsla(283, 64%, 47%, 0.538)"}
          textColor={"blackAlpha.800"}
        />
        <Box mt="20px" w={{ lg: "80%", md: "75%", sm: "70%", base: "100%" }}>
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
