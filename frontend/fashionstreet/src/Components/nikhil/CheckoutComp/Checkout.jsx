import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { SetAlert } from "../SingleProduct";
import Address from "./Address";
import Payment from "./Payment";
import Summary from "./Summary";

export default function Checkout() {
  const [checkAddress, setCheckAddress] = useState(true);

  return (
    <Flex flexWrap={"wrap"} p="20px" justify={"space-evenly"} gap="40px">
      <Address setCheckAddress={setCheckAddress} />
      <Payment checkAddress={checkAddress} />
      <Summary />
      <Box border={"1px solid #d6d6d6"}>
        <SetAlert />
      </Box>
    </Flex>
  );
}
