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
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Filter, { FilterDrower, Sort } from "./FilterDrower";

async function getData() {
  try {
    let res = await axios.get(`http://localhost:8080/clothing?_limit=12`);
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
    <Stack border={"2px solid red"}>
      <Heading position={""}>Products</Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
        }}
        position="relative"
        top={"20px"}
      >
        <Hide below="lg">
          <GridItem rowSpan={50000} colSpan={1}>
            <Filter />
          </GridItem>
        </Hide>
        <Show below="lg">
          <Box position={"fixed"} top="40px" left="20px" zIndex={100}>
            <FilterDrower />
          </Box>
        </Show>
        <Box position={"fixed"} top="40px" right="0px" zIndex={100}>
          <Sort />
        </Box>

        {data.map((product) => (
          <Stack
            key={product.id}
            justify={"space-between"}
            align="center"
            border={"1px solid #D6D6D6"}
            p="10px"
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
            <VStack as={Link} href="#">
              <Image src={product.images[0] || "/favicon.ico"} alt="products" />
              <Box
                overflow={"hidden !important"}
                display={"inline-block"}
                whiteSpace="nowrap"
                textOverflow={"ellipsis"}
                w={{ base: "150px" }}
              >
                <Text
                  fontSize={"lg"}
                  fontWeight="bold"
                  overflow={"hidden !important"}
                  textOverflow={"ellipsis"}
                >
                  {product.title}
                </Text>
                <Text overflow={"hidden !important"} textOverflow={"ellipsis"}>
                  {product.subtitle}
                </Text>
              </Box>
              <Text fontWeight="bold">
                ${product.discounted_price} - ${product.strike_price}
              </Text>
            </VStack>
          </Stack>
        ))}
      </Grid>
      <Text>
        {">"} 1 2 3 4 {">"}
      </Text>
    </Stack>
  );
}
