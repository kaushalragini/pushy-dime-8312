
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Heros from "../Components/devarshi/Components/Heros";
import {Footer} from "../Components/devarshi/Components/Footer/Footer"
import Hero2 from "../Components/devarshi/Components/Hero2";
import compare from "./png/500+.png"
import fashion from "./png/fashion.png"
import saree from "./png/saree.jpeg"
import shop from "./png/shop.jpeg"

const Home = () => {
  return (
    <Box>
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
  <Text color="gray.700" mt={"20px"} fontSize={{base:"18px",md:"25px",lg:"18px"}}>Upstyle allows you to compare prices and</Text>
  <Text color="gray.700"  fontSize={{base:"18px",md:"25px",lg:"18px"}}>availability across hundreds of stores and</Text>
  <Text color="gray.700"  fontSize={{base:"18px",md:"25px",lg:"18px"}}>thousands of brands</Text>
  {/* <Text color="gray.700"  fontSize={"18px"}>{text3}</Text> */}
  <Text color="red" mt={"20px"} textDecoration="underline">TRY IT OUT</Text>
</GridItem>
<GridItem  h='500px' mb="50px">
  <Image src="https://cdn.modesens.com/static/img/20221231bg2_en.png" 
   h={{base:"40vh",md:"40vh",lg:"45vh"}}
   w={{base:"40vw",md:"40vw",lg:"45vw"}}
   position="absolute" right={{sm:"0px",md:"60px",lg:"250px" }}

   top={{base:"5180px",md:"2700px", lg:"2200px"}}
   
  //  h={{base:"200px",lg:"400px"}}
  //        w={{base:"100px",lg:"400px"}}
  //        ml={{base:"30px",md:"150px"}}
  //        mt={{base:"130px"}}
   />
</GridItem>
</Grid>

{/* ==========================4th==================================================== */}

<Box textAlign="center" mt="100px">
        <Heading fontWeight={400}>COMPARE AND SHOP WHEREVER YOU GO</Heading>
        <Text mt="20px" color="gray.800">To unlock all upstyle features and functionality, simply download our App and Browse</Text>
        <Text>Extension.</Text>
    </Box>
<Grid templateColumns='repeat(2, 1fr)'>
    

<GridItem w='100%' h='500px' ml={{sm:"0px",md:"50px",lg:"100px"}}>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450} mt={"200px"}>Install the Upstyle</Heading>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450}>Browser Extension</Heading>
  <Text color="gray.700" mt={"20px"} fontSize={"18px"}>Automatically compare products across 500+</Text>
  <Text color="gray.700"  fontSize={"18px"}>stores while you browse at any of our partner</Text>
  <Text color="gray.700"  fontSize={"18px"}>stores' website</Text>
  {/* <Text color="gray.700"  fontSize={"18px"}>{text3}</Text> */}
  <Button color="red" mt={"20px"} border="1px solid red" bg="none">INSTALL NOW</Button>
</GridItem>
<GridItem  h='500px' mt={100} mr="100px">
  <Image src="https://cdn.modesens.com/static/img/20221231bg3_en.png" 
   h={{base:"40vh",md:"40vh",lg:"45vh"}}
   w={{base:"40vw",md:"40vw",lg:"45vw"}}
   position="absolute" right={{sm:"0px",md:"40px",lg:"250px" }}

   top={{base:"6070px",md:"3500px", lg:"2930px"}}
  //  h={{base:"200px",lg:"400px"}}
  //  w={{base:"100px",lg:"400px"}}
  //  ml={{base:"30px",md:"150px"}}
  //  mt={{base:"130px"}}
   />
</GridItem>
</Grid>  

{/* ===========================================5th=============================================== */}

 <Grid templateColumns='repeat(2, 1fr)'>
    
<GridItem  h='500px' mt={100} >
  <Image src="https://cdn.modesens.com/static/img/20221231bg4_en.png" 
  h={{base:"40vh",md:"40vh",lg:"60vh"}}
  w={{base:"40vw",md:"40vw",lg:"40vw"}}
  position="absolute" right={{sm:"0px",md:"400px",lg:"700px" }}

  top={{base:"6470px",md:"4100px", lg:"3450px"}}
  //  h={{base:"400px",md:"300px",lg:"400px"}}
  //  w={{base:"100vw",md:"300px",lg:"400px"}}
  //  mr={{base:"0px",md:"300px"}}
  
   mt={{base:"130px",md:"0px"}}
   />
</GridItem>
<GridItem w='100%' h='500px' ml={{sm:"0px",md:"50px",lg:"100px"}}>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"30px"}} fontWeight={450} mt={"200px"}>DOWNLOAD THE UPSTYLE APP</Heading>
  
  <Text color="gray.700" mt={"20px"} fontSize={"18px"}>Scan any code or tag on a product to compare across 500+ strores</Text>
  <Text color="gray.700"  fontSize={"18px"}>before you buy.</Text>
  <Grid templateColumns='repeat(2, 1fr)'>
<GridItem><Image url="https://cdn.modesens.com/static/img/20220926download_ios.svg"/></GridItem>
<GridItem><Image url="https://cdn.modesens.com/static/img/20220926download_android.svg"/></GridItem>
</Grid>
</GridItem>

</Grid> 
 {/* =================================================+359,394 */}
<Flex position="relative" 
   h={useBreakpointValue({ base: "40vh", md: "60vh",lg:"40vh" })}
   w={useBreakpointValue({ base: "100%" ,md: "100%" })}
      // h={"90vh"}
      backgroundImage={

        
         "url(https://cdn.modesens.com/static/img/20220915-bg2.png)"
      }
       backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack position="absolute"  bottom={{sm:"105px",md:"200px",lg:"100px"}} left={{sm:"0.5px",md:"100px",lg:"200px"}}
       
        justify={"center"}
        px={useBreakpointValue({ base: "20px", md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={400}
            
            fontSize={useBreakpointValue({ base: "xl", md: "4xl",lg:"25px" })}
            
          >WE HAVE HELPED MILLIONS OF MEMBERS SAVE:
            
          </Text>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={useBreakpointValue({base:"0.5px",md:"1px",lg:"10px"})}
            fontSize={useBreakpointValue({ base: "xl", md: "4xl",lg:"70px" })}
            textAlign="center"
          >
           $361,949,000+ 
          </Text>
          <Stack direction={"row"} flexWrap={"wrap"}>
            
            <Button
              bg={"red"}
          color={"white"}
          position="relative"
          top={useBreakpointValue({ sm: "20px", md: "40px",lg:"20px" })}
          left={useBreakpointValue({ sm: "20px", md: "40px",lg:"200px" })}
          
         
            >
              JOIN NOW FOR FREE
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
 {/* ========================================7th======================================================== */}
 
<Heading mt="100px" textAlign={"center"} fontWeight={500}>SHOP YOUR FAVORITE CATEGORY</Heading>
<Box mt={{sm:"40px",lg:"80px"}}><Image src={shop}/></Box>
 {/* ====================================================fashion============================= */}

 <Grid templateColumns='repeat(2, 1fr)' bg="#CCD1D1">
    
<GridItem  h='500px' mt={100} >
  <Image src={fashion} 
   h={{base:"40vh",md:"40vh",lg:"60vh"}}
   w={{base:"40vw",md:"40vw",lg:"40vw"}}
   position="absolute" right={{sm:"0px",md:"370px",lg:"700px" }}
 
   top={{base:"7800px",md:"5700px", lg:"5100px"}}
   />
</GridItem>
<GridItem w='100%' h='500px' ml={{sm:"0px",md:"50px",lg:"100px"}}>
  <Heading fontSize={{sm:"15px",md:"30px",lg:"35px"}} fontWeight={600} mt={"200px"}>Fashion-Forward Community</Heading>
  
  <Text color="gray.700" mt={"20px"} fontSize={"18px"}>You look amazing on us! Come on, join the</Text>
  <Text color="gray.700"  fontSize={"18px"}>Upstyle Fashion Community</Text>
  <Text color="red"  fontSize={"15px"} textDecoration="underline" mt="20px">JOIN UPSTYLE COMMUNITY</Text>
  <Text color="red"  fontSize={"15px"} textDecoration="underline" mt="20px">FASHION BLOGS</Text>
  
  </GridItem>



</Grid>  
<Box mt={{base:"0px",md:"0px",lg:"0px" }}><Image src={saree}/></Box> 
<Text mt="50px" textAlign={"center"}>Join Today to Unleash the Full Power of UpStyle</Text>
<Button bg="red" ml={{base:"50px",md:"280px",lg:"550px" }}color="white" mt="20px">JOIN NOW FOR FREE</Button>


</Box>
<Box><Footer /></Box>
</Box>
);
}



export default Home;

