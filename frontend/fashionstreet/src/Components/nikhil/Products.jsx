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
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import FilterDrower from "./FilterDrower";

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
      <Heading>Prod</Heading>
      <Grid
        gridTemplateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(3,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
          xl: "repeat(5,1fr)",
        }}
      >
        <GridItem rowSpan={50000} colSpan={1}>
          <FilterDrower />
        </GridItem>
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
            <Stack as={Link} href="#">
              <Image src={product.images[0] || "/favicon.ico"} alt="products" />
              <Box
                overflow={"hidden !important"}
                display={"inline-block"}
                whiteSpace="nowrap"
                textOverflow={"ellipsis"}
                w="200px"
              >
                <Text fontSize={"lg"} fontWeight="bold">
                  {product.title}
                </Text>
                <Text>{product.subtitle}</Text>
              </Box>
              <Text fontWeight="bold">
                ${product.discounted_price} - ${product.strike_price}
              </Text>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Stack>
  );
}
