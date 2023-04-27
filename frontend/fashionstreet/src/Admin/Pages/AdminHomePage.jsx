import { Flex } from "@chakra-ui/react";
import React from "react";
import AdminRoute from "../Components/AdminRoute";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarWithHeader from "../Components/AdminSidebar";
const AdminHomePage = () => {
  return (
    <div>
      {/* <Sidebar textColor="blackAlpha.800" /> */}
      <SidebarWithHeader>
        <AdminRoute />
      </SidebarWithHeader>
    </div>
  );
};

export default AdminHomePage;
