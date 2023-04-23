import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import AddProductForm from "../Components/AdminProducts/AddProductForm";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarWithHeader from "../Components/AdminSidebar";

const AdminProducts = () => {
  return (
    <div>
      <SidebarWithHeader>
        <Box mt="10px">
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
      </SidebarWithHeader>
    </div>
  );
};

export default AdminProducts;
