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
      w={useBreakpointValue({ base: "100%", md: "100%" })}
      h={{ lg: "90vh", md: "300px", sm: "400px", base: "150px" }}
      backgroundImage={
        "url(https://cdn.modesens.com/static/img/20221009_bg1.png)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <VStack
        position="absolute"
        top={{ lg: "100px", md: "100px", sm: "70px", base: "10px" }}
        left={{ lg: "40px", md: "40px", sm: "40px", base: "10px" }}
        justify={"center"}
        px={useBreakpointValue({ base: "20px", md: 8 })}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={{ lg: "70px", md: "50px", sm: "40px", base: "15px" }}
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
            fontSize={{ lg: "70px", md: "50px", sm: "30px", base: "15px" }}
          >
            BEFORE YOU BUY
          </Text>
          <Stack position="relative" direction={"row"} flexWrap={"wrap"}>
            <Text
              color={"white"}
              top={useBreakpointValue({ base: "5px", md: "10px", lg: "20px" })}
            >
              We're not a store. We are your fashion shopping assistant.
            </Text>
            <Button
              bg={"red"}
              color={"white"}
              position="absolute"
              fontSize={{ lg: "19px", md: "15px", sm: "15px", base: "8px" }}
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
