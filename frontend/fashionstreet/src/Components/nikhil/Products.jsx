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
import Pagination from "./Pagination";

export const baseURL = "http://localhost:8080";

async function getData({ page, sort, order }) {
  try {
    let res = await axios.get(
      `${baseURL}/products?_limit=8&_page=${page}&_sort=${sort}&_order=${order}`
    );
    let data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export default function Products() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState({
    page: 1,
    sort: "",
    order: "",
  });

  useEffect(() => {
    getData(filterData).then((res) => setData(res));
  }, [filterData]);

  const handlePage = (page) => {
    setFilterData({ ...filterData, page });
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleFilters = ({}) => {
    console.log("filter");
  };

  return (
    <Stack>
      <Stack position="relative">
        <Heading>MEN</Heading>
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
              <Filter handleFilters={handleFilters} filterData={filterData} />
            </GridItem>
          </Hide>
          <Show below="lg">
            <Box position={"absolute"} top="0px" left="20px" zIndex={100}>
              <FilterDrower
                handleFilters={handleFilters}
                filterData={filterData}
              />
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
      <Pagination handlePage={handlePage} page={filterData.page} />
    </Stack>
  );
}
