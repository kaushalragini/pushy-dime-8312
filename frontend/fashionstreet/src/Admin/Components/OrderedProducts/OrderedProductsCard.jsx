import { Box, Button, Center, Flex, Skeleton, Stack } from "@chakra-ui/react";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import {
  deleteOrders,
  updateOrders,
} from "../../../Redux/OrderedProducts/OrderedProducts.action";
import "../AdminProducts/ProductCard.css";

const OrderedProductsCard = ({ order }) => {
  console.log("order:", order);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();
  const { loading } = useSelector((state) => state.orderedProductsManager);

  const updateData = () => {
    dispatch(updateOrders({ status: "delivered" }, Toast, order._id));
  };

  const deleteData = () => {
    dispatch(deleteOrders(Toast, order._id));
  };

  if (loading)
    return (
      <Stack>
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
      </Stack>
    );

  return (
    <div>
      <Box>
        <Center>
          <Box
            color={order?.status === "delivered" ? "green" : "yellow.500"}
            fontSize="30px"
            fontWeight="extrabold"
            mb="30px"
          >
            {order?.status === "delivered" ? "Delivered" : "Pending"}
          </Box>
        </Center>
        <Flex w="100%" justifyContent="space-between">
          <Box mr="15px">
            <Button
              onClick={updateData}
              isDisabled={order?.status === "delivered" ? true : false}
              colorScheme={order?.status === "delivered" ? "green" : "yellow"}
            >
              {order?.status === "delivered"
                ? "Delivered Successful"
                : "Make it Delivered"}
            </Button>
          </Box>
          <Box>
            <Button
              isDisabled={order?.status === "delivered" ? true : false}
              onClick={deleteData}
              colorScheme="red"
            >
              Cancel Order
            </Button>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default OrderedProductsCard;
