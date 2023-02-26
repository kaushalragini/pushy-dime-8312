import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function WithBackgroundImage({ url }) {
  return (
    <Flex
      mt={"30px"}
      position="relative"
      // h={useBreakpointValue({ base: "90vh", md: "90vh" })}
      w={useBreakpointValue({ base: "100%", md: "100%" })}
      h={{ lg: "90vh", md: "300px", sm: "400px", base: "150px" }}
      // h={"90vh"}
      backgroundImage={
        "url(https://cdn.modesens.com/static/img/20221009_bg1.png)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <VStack
        position="absolute"
        top={{ lg: "100px", md: "100px", sm: "70px", base: "10px" }}
        left="40px"
        justify={"center"}
        px={useBreakpointValue({ base: "20px", md: 8 })}
        // bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={{ lg: "70px", md: "50px", sm: "40px", base: "15px" }}
            // fontSize={useBreakpointValue({ base: "xl", md: "4xl", lg: "70px" })}
          >
            CHECK UPSTYLE
          </Text>

          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={useBreakpointValue({
              base: "0.5px",
              md: "1px",
              lg: "10px",
            })}
            // fontSize={useBreakpointValue({ base: "xl", md: "4xl", lg: "70px" })}
            fontSize={{ lg: "70px", md: "50px", sm: "30px", base: "15px" }}
          >
            BEFORE YOU BUY
          </Text>
          <Stack position="relative" direction={"row"} flexWrap={"wrap"}>
            <Text
              color={"white"}
              // fontSize={useBreakpointValue({ base: "l", md: "2xl" })}
              // position="relative"
              top={useBreakpointValue({ base: "5px", md: "10px", lg: "20px" })}
            >
              We're not a store. We are your fashion shopping assistant.
            </Text>
            <Button
              bg={"red"}
              color={"white"}
              position="absolute"
              fontSize={{ lg: "19px", md: "15px", sm: "15px", base: "8px" }}
              // top={useBreakpointValue({ base: "20px", md: "40px" })}
              top={{ lg: "60px", md: "30px", sm: "100px", base: "25px" }}
              right={{ base: "10px" }}
            >
              JOIN NOW FOR FREE
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
