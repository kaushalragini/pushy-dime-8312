import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductModal from "../Components/AdminProducts/ProductModal";
import ProductsCompo from "../Components/AdminProducts/ProductsCompo";
import ProductsTable from "../Components/AdminProducts/ProductsTable";
import useToastCompo from "../../CustomHook/useToast";
import { getUsers } from "../../Redux/Users/Users.actions";
import UsersTable from "../Components/AdminUsers/UsersTable";
import OrderedProductsTable from "../Components/OrderedProducts/OrderedProductsTable";
import { getOrders } from "../../Redux/OrderedProducts/OrderedProducts.action";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SidebarWithHeader from "../Components/AdminSidebar";

const AdminOrderedProducts = () => {
  const { orders } = useSelector((state) => state.orderedProductsManager);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  useEffect(() => {
    dispatch(getOrders(Toast));
  }, []);
  // console.log(orders);
  return (
    <div>
      <SidebarWithHeader>
        <Box mt="10px">
          <OrderedProductsTable orders={orders} />
        </Box>
      </SidebarWithHeader>
    </div>
  );
};

export default AdminOrderedProducts;
