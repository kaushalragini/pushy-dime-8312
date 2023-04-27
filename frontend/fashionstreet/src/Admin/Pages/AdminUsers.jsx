import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";
import ProductsTable from "../Components/AdminProducts/ProductsTable";
import useToastCompo from "../../CustomHook/useToast";
import { getUsers } from "../../Redux/Users/Users.actions";
import UsersTable from "../Components/AdminUsers/UsersTable";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import SidebarWithHeader from "../Components/AdminSidebar";

const AdminUsers = () => {
  const { users } = useSelector((state) => state.usersManager);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  useEffect(() => {
    dispatch(getUsers(Toast));
  }, []);
  console.log(users);
  return (
    <div>
      <SidebarWithHeader>
        <Box mt="10px">
          <UsersTable users={users} />
        </Box>
      </SidebarWithHeader>
    </div>
  );
};

export default AdminUsers;
