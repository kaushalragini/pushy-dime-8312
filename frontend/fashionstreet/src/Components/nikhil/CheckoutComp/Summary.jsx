import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Summary() {
  const { CART } = useSelector((store) => store.cartManager);

  const total = CART.reduce((acc, el, i) => {
    return acc + el.productsId.price * el.quantity;
  }, 0);

  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>3. ORDER SUMMARY</Text>
      {/* <Text>ORDER BY : Nikhil Angolkar</Text> */}
      <Text>CART TOTAL: ₹ {total}</Text>
    </Stack>
  );
}
