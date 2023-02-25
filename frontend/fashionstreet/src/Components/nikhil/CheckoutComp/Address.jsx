import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ButtonStyle } from "../nikhil.css";

export default function Address() {
  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>1. ADDRESS</Text>
      <p>House / Flat No.</p>
      <Input />
      <p>City</p>
      <Input />
      <p>Pin</p>
      <Input />
      <p>State</p>
      <Input />
      <br />
      <Button {...ButtonStyle}>SUBMIT</Button>
    </Stack>
  );
}
