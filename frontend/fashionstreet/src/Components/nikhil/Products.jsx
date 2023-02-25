import {
  Container,
  Grid,
  HStack,
  Stack,
  Text,
  Image,
  Heading,
  Box,
  GridItem,
  VStack,
  Hide,
  Show,
  Divider,
  Center,
  Skeleton,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import Filter, { FilterDrower, Pagination, Sort } from "./FilterDrower";
import { get_products, get_single_product } from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";
import { Link } from "react-router-dom";

export default function Products() {
  // redux store
  const { PRODUCTS } = useSelector((store) => store.productsManager);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_products({ page: 1 }));
  }, []);

  return (
    <>
      <Stack>
        <Box
          // border={"1px solid"}
          textAlign="center"
          position="sticky"
          top="53px"
          zIndex={"100"}
        >
          <Show below="lg">
            <Box position={"absolute"} top="0px" left="0">
              <FilterDrower />
            </Box>
          </Show>
          <Box position={"absolute"} top="0px" right="0">
            <Sort />
          </Box>
        </Box>
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
            <GridItem rowSpan={50000} colSpan={1} border={"1px solid #D6D6D6"}>
              <Filter />
            </GridItem>
          </Hide>

          {PRODUCTS.map((product) => (
            <Stack
              key={product._id}
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
              <VStack
                as={Link}
                target="_blank"
                to={`/products/${product._id}`}
                h="100%"
                justify={"space-between"}
              >
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
    </>
  );
}
