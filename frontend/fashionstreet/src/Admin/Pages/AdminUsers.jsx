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
      <Navbar />
      <Flex>
        <Sidebar
          color={"hsla(283, 64%, 47%, 0.538)"}
          textColor={"blackAlpha.800"}
        />
        <Box mt="50px" w={{ lg: "80%", md: "75%", sm: "70%", base: "100%" }}>
          <Box>
            {/* <ProductModal
              title={"Add New Products"}
              size={"lg"}
              btnText={"Add New Products"}
            >
              <h1>Hello</h1>
            </ProductModal> */}
          </Box>
          <UsersTable users={users} />
        </Box>
      </Flex>
    </div>
  );
};

export default AdminUsers;
