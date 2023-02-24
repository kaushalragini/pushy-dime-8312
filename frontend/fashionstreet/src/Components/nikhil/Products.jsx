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
import { useEffect } from "react";
import Filter, { FilterDrower, Pagination, Sort } from "./FilterDrower";
import { get_products } from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";

export default function Products() {
  // redux store
  const { PRODUCTS } = useSelector((store) => store.productsManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_products({ page: 1 }));
  }, []);

  return (
    <Container maxW={"1500px"}>
      <Stack position="relative">
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

          {PRODUCTS.map((product) => (
            <Stack
              key={product.number}
              justify={"space-between"}
              align="center"
              border={"1px solid #D6D6D6"}
              p="10px 5px"
              position={"relative"}
              textAlign="center"
            >
              {/* <Text
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
              </Text> */}
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
      <Pagination />
    </Container>
  );
}
