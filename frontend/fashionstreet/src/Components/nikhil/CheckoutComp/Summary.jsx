import React from "react";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function Summary() {
  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>3. ORDER SUMMARY</Text>
      <Text>ORDER BY : Nikhil Angolkar</Text>
      <Text>CART TOTAL: $0000</Text>
    </Stack>
  );
}
