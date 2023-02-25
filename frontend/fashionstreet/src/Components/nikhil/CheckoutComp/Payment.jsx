import { Button, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonStyle } from "../nikhil.css";

export default function Payment() {
  return (
    <Stack>
      <Text fontWeight={"bold"}>2. PAYMENT (pay with your debit card)</Text>
      <p>Card number</p>
      <Input w="300px" />
      <p>Name on card</p>
      <Input w="300px" />
      <p>Expiry date</p>
      <Input w="300px" type={"date"} />
      <p>CVV</p>
      <Input w="100px" type={"password"} maxLength="3" />
      <br />
      <Button w="300px" {...ButtonStyle}>
        PAY
      </Button>
    </Stack>
  );
}
