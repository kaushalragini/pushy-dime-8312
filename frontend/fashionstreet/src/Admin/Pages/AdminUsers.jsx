import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";
import ProductsTable from "../Components/AdminProducts/ProductsTable";
import useToastCompo from "../../CustomHook/useToast";
import { getUsers } from "../../Redux/Users/Users.actions";
import UsersTable from "../Components/AdminUsers/UsersTable";

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
