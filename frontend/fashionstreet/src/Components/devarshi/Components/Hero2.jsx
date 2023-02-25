import {
  Box,
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

         <Grid templateColumns='repeat(2, 1fr)' bg="#D8D7DB" >

      <GridItem w='100%' h='500px' ml={{sm:"0px",md:"50px",lg:"100px"}}>
        <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450} mt={"200px"}>{head}</Heading>
        <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450}>{head2}</Heading>
        <Text color="gray.700" mt={"20px"} fontSize={"18px"}>{text}</Text>
        <Text color="gray.700"  fontSize={"18px"}>{text1}</Text>
        <Text color="gray.700"  fontSize={"18px"}>{text2}</Text>
        <Text color="gray.700"  fontSize={"18px"}>{text3}</Text>
        <Text color="red" mt={"20px"} textDecoration="underline">{red}</Text>
      </GridItem>
      <GridItem  h='500px'mb="50px">
        <Image src={url} 
         h={{base:"40vh",md:"40vh",lg:"45vh"}}
         w={{base:"40vw",md:"40vw",lg:"45vw"}}
         position="absolute" right={{sm:"0px",md:"40px",lg:"250px" }}
    
         top={{base:"900px",md:"1000px", lg:"800px"}}
         />
      </GridItem>
      </Grid>

    // </Box>
  );
};

export default Hero2;
