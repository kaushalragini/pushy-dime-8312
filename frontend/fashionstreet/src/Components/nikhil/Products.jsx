import {
  Container,
  Grid,
  HStack,
  Stack,
  Text,
  Link,
  Image,
  Heading,
  Box,
  GridItem,
  VStack,
  Hide,
  Show,
  Divider,
  Center,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Filter, { FilterDrower, Sort } from "./FilterDrower";

async function getData() {
  try {
    let res = await axios.get(`http://localhost:8080/clothing?_limit=24`);
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Products() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData().then((res) => setData(res));
  }, []);

  return (
    <Stack>
      <Heading position={""}>Products</Heading>
      <Stack position="relative">
        <Text fontWeight={"bold"}>MENS</Text>
        <Grid
          gridTemplateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(3,1fr)",
            lg: "repeat(4,1fr)",
            xl: "repeat(5,1fr)",
          }}
        >
          <Hide below="lg">
            <GridItem rowSpan={50000} colSpan={1}>
              <Filter />
            </GridItem>
          </Hide>
          <Show below="lg">
            <Box position={"absolute"} top="0px" left="20px" zIndex={100}>
              <FilterDrower />
            </Box>
          </Show>
          <Box position={"absolute"} top="0" right="0px" zIndex={100}>
            <Sort />
          </Box>

          {data.map((product) => (
            <Stack
              key={product.number}
              justify={"space-between"}
              align="center"
              border={"1px solid #D6D6D6"}
              p="10px 5px"
              position={"relative"}
            >
              <Text
                position={"absolute"}
                top="0px"
                right="10px"
                color={"white"}
                fontSize="30px"
                textShadow={"0px 0px 3px black"}
                cursor="pointer"
                _hover={{ textShadow: "0px 0px 4px red" }}
              >
                ♥
              </Text>
              <VStack as={Link} href="#" h="100%" justify={"space-between"}>
                <Center h="250px">
                  <Image
                    src={product.img || "/favicon.ico"}
                    alt={product.product_name}
                    h="100%"
                  />
                </Center>

                <Box
                  overflow={"hidden !important"}
                  display={"inline-block"}
                  whiteSpace="nowrap"
                  textOverflow={"ellipsis"}
                  w={{ base: "170px" }}
                >
                  <Text
                    fontSize={"lg"}
                    fontWeight="bold"
                    overflow={"hidden !important"}
                    textOverflow={"ellipsis"}
                  >
                    {product.brand}
                  </Text>
                  <Text
                    overflow={"hidden !important"}
                    textOverflow={"ellipsis"}
                  >
                    {product.product_name}
                  </Text>
                </Box>
                <Text fontWeight="bold">${product.price}</Text>
              </VStack>
            </Stack>
          ))}
        </Grid>
      </Stack>
      <Text>
        {">"} 1 2 3 4 {">"}
      </Text>
    </Stack>
  );
}
