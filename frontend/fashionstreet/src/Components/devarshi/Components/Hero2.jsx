 import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Hero2 = ({ head, head2, text, text1, text2, text3, red, url }) => {
  return (
    // <Box bg="gray.100" h="600px">

    <Grid
      mt={"50px"}
      templateColumns={{
        lg: "repeat(2, 1fr)",
        md: "repeat(2, 1fr)",
        sm: "repeat(2, 1fr)",
        base: "repeat(2, 1fr)",
      }}
      bg="#D8D7DB"
    >
      <GridItem
        p="10px"
        // w="100%"
        // h="500px"
        // ml={{ sm: "0px", md: "50px", lg: "100px" }}
      >
        <Heading
          fontSize={{ sm: "20px", md: "30px", lg: "30px" }}
          fontWeight={450}
          // mt={"200px"}
        >
          {head}
        </Heading>
        <Heading
          fontSize={{ lg: "30px", md: "30px", sm: "20px" }}
          fontWeight={450}
        >
          {head2}
        </Heading>
        <Text
          color="gray.700"
          mt={"20px"}
          fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
        >
          {text}
        </Text>
        <Text
          color="gray.700"
          fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
        >
          {text1}
        </Text>
        <Text
          color="gray.700"
          fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
        >
          {text2}
        </Text>
        <Text
          color="gray.700"
          fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
        >
          {text3}
        </Text>
        <Text color="red" mt={"20px"} textDecoration="underline">
          {red}
        </Text>
      </GridItem>
      <GridItem
        p="10px"
        //  h="500px"
        //  mb="50px"
      >
        <Flex h="100%" align="center">
          <Box>
            <Image
              src={url}
              // h={{ base: "40vh", md: "40vh", lg: "45vh" }}
              // w={{ base: "40vw", md: "40vw", lg: "45vw" }}
              // position="absolute"
              // right={{ sm: "0px", md: "40px", lg: "250px" }}
              // top={{ base: "900px", md: "1000px", lg: "800px" }}
            />
          </Box>
        </Flex>
      </GridItem>
    </Grid>

    // </Box>
  );
};

export default Hero2;
