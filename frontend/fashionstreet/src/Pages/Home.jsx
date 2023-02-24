import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import Heros from "../Components/devarshi/Components/Heros";

import Hero2 from "../Components/devarshi/Components/Hero2";
import compare from "./png/500+.png"
const Home = () => {
  return (
    <Box px={useBreakpointValue({ base: "20px", md: "50px", lg: "100px" })}>
      <Heros/>

      <Hero2
        head="Compare 500+ Stores"
        head2="In One Place"
        text="Upstyle allows you to compare prices and"
        text1="availability across hundreds of stores and"
        text2="thousands of brands"
        
        red="TRY IT OUT"
        url={compare}
      /> 


      {/* ++++++ YAHA SE ++++ */}
      <Box textAlign={"center"} mt="100px">
        <Heading fontWeight={500}>500+ PREMIUM PARTNERS</Heading>
        <Text color="gray.600" mt="20px">
          We Only partner with the most reputable stores and brands to offer you
          the largest selections
        </Text>
        <Text color="gray.600">
          and mostly trustworthy shopping experience online.
        </Text>
      </Box>
      <Grid
        templateColumns={{ md: "repeat(4,1fr)", lg: "repeat(6, 1fr)" }}
        gap={10}
        templateRows="repeat(4, 1fr)"
      >
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-GUCCI-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-PRADA-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-SAINT-LAURENT-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-BOTTEGA-VENETA-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-BURBERRY-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-FENDI-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-VERSACE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-BALENCIAGA-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-GIVENCHY-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-LOEWE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-OFF-WHITE-logo.png" />
        </GridItem>
        <GridItem w="100%" h="100">
          <Image src="https://cdn.modesens.com/banner/20211014-VALENTINO-logo.png" />
        </GridItem>
      </Grid>


{/* =======================================3rd============================================================================== */}
      <Grid templateColumns='repeat(2, 1fr)' bg="#CCD1D1" mt="100px">

<GridItem w='100%' h='500px' ml={{sm:"0px",md:"50px",lg:"100px"}}>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450} mt={"200px"}>Compare 500+ Stores</Heading>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450}>In One Place</Heading>
  <Text color="gray.700" mt={"20px"} fontSize={"18px"}>Upstyle allows you to compare prices and</Text>
  <Text color="gray.700"  fontSize={"18px"}>availability across hundreds of stores and</Text>
  <Text color="gray.700"  fontSize={"18px"}>thousands of brands</Text>
  {/* <Text color="gray.700"  fontSize={"18px"}>{text3}</Text> */}
  <Text color="red" mt={"20px"} textDecoration="underline">TRY IT OUT</Text>
</GridItem>
<GridItem  h='500px' mt={100} mr="100px">
  <Image src={compare} 
   h="400px"
   />
</GridItem>
</Grid>
</Box>

  );
};

export default Home;

