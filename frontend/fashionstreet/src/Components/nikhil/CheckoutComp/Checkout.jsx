import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { SetAlert } from "../SingleProduct";
import Address from "./Address";
import Payment from "./Payment";
import Summary from "./Summary";

export default function Checkout() {
  return (
    <Flex flexWrap={"wrap"} p="20px" justify={"space-evenly"} gap="40px">
      <Address />
      <Payment />
      <Summary />
      <Box border={"1px solid #d6d6d6"}>
        <SetAlert />
      </Box>
    </Flex>
  );
}
