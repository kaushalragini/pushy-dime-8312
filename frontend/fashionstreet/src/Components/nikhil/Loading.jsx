import { Box, Center, HStack, Image, VStack } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <Center h="100vh">
      <Image src="/loading.gif" />
    </Center>
  );
}
