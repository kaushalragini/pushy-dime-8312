import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage({url}) {
  return (
    <Flex position="relative" 
   h={useBreakpointValue({ base: "90vh", md: "90vh" })}
   w={useBreakpointValue({ base: "100%" ,md: "100%" })}
      // h={"90vh"}
      backgroundImage={

        
         "url(https://cdn.modesens.com/static/img/20221009_bg1.png)"
      }
       backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack position="absolute"  top="200px" left="40px"
       
        justify={"center"}
        px={useBreakpointValue({ base: "20px", md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "4xl",lg:"70px" })}
            
          >
            CHECK UPSTYLE
          </Text>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={useBreakpointValue({base:"0.5px",md:"1px",lg:"10px"})}
            fontSize={useBreakpointValue({ base: "xl", md: "4xl",lg:"70px" })}
            
          >
            BEFORE YOU BUY
          </Text>
          <Stack direction={"row"} flexWrap={"wrap"}>
            <Text
             color={"white"}
             fontSize={useBreakpointValue({ base: "l", md: "2xl" })}
             position="relative"
             top={useBreakpointValue({ base: "5px", md: "10px",lg:"20px" })}
            >
              We're not a store. We are your fashion shopping assistant.
            </Text>
            <Button
              bg={"red"}
          color={"white"}
          position="relative"
          top={useBreakpointValue({ base: "20px", md: "40px" })}
          
         
            >
              JOIN NOW FOR FREE
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
