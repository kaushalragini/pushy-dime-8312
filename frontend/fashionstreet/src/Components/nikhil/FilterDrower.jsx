import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Select,
  Input,
  Checkbox,
  Flex,
  HStack,
  Divider,
  Link,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { get_products } from "../../Redux/Products/action";
import RangeSliderComp from "./RangeSlider";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";
import { FaBeer } from "react-icons/fa";
import { Search2Icon } from "@chakra-ui/icons";

export default function Filter() {
  const dispatch = useDispatch();
  const { params } = useSelector((store) => store.productsManager);

  const handleClick = (main, sub) => {
    if (main === "brand") {
      dispatch(get_products({ ...params, page: 1, brand: sub }));
    } else if (main === "category") {
      dispatch(get_products({ ...params, page: 1, category: sub }));
    } else if (main === "gender") {
      dispatch(get_products({ ...params, page: 1, gender: sub }));
    } else if (main === "price") {
      dispatch(get_products({ ...params, page: 1, min: sub[0], max: sub[2] }));
    }
  };

  return (
    <>
      <Stack w="100%" p="10px" textAlign="left">
        <Stack p="15px" position={"relative"}>
          <Heading size={"md"}>FILTERS</Heading>
          <button
            style={{ position: "absolute", right: "15px" }}
            onClick={() => dispatch(get_products({}))}
          >
            Reset
          </button>
          <Box border={"1px solid #d6d6d6"}>
            {params.brand && <p>BRAND: {params.brand}</p>}
            {params.category && <p>CATEGORY: {params.category}</p>}
            {params.max && (
              <p>
                PRICE: Rs.{params.min} to Rs.{params.max}
              </p>
            )}
            {params.gender && <p>GENDER: {params.gender}</p>}
          </Box>
        </Stack>
        <Accordion defaultIndex={[0]} allowMultiple>
          {filters.map((main) => (
            <AccordionItem key={main.title}>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                  {main.title.toUpperCase()}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel>
                {main.subtitles.map((el) => (
                  <div key={el}>
                    <button onClick={() => handleClick(main.title, el)}>
                      {el}
                    </button>
                    <br />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Stack>
    </>
  );
}

export function FilterDrower() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div>
      <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Text
          fontWeight={"bold"}
          border={"1px solid #D6D6D6"}
          w="80px"
          bgColor={"white"}
        >
          FILTER
        </Text>
      </button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Filter />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              CLOSE
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function Sort() {
  const handleSort = (e) => {
    dispatch(get_products({ ...params, page: 1, sort: e.target.value }));
  };
  const dispatch = useDispatch();
  const { params } = useSelector((store) => store.productsManager);

  return (
    <Box border={"1px solid #D6D6D6"} w="80px" bgColor={"white"}>
      <Select
        textAlign={"right"}
        variant="unstyled"
        fontWeight={"bold"}
        onChange={handleSort}
      >
        <option value={undefined}>SORT</option>
        <option value="brand">A to Z</option>
        <option value="-brand">Z to A</option>
        <option value="price">Price Low to High</option>
        <option value="-price">Price High to Low </option>
      </Select>
    </Box>
  );
}

export function Pagination() {
  const dispatch = useDispatch();
  const { params, PRODUCTS } = useSelector((store) => store.productsManager);
  const totalPageCount = Math.ceil(50 / 24);
  let page = params.page;

  const handlePage = (val) => {
    dispatch(get_products({ ...params, page: page + val }));
  };

  return (
    <HStack
      gap={"20px"}
      justify={"center"}
      fontSize="20px"
      p="10px"
      border={"1px solid #D6D6D6"}
    >
      <button
        onClick={() => handlePage(-1)}
        hidden={page === 1}
        style={{ fontWeight: "bold" }}
      >
        {"<<"}
      </button>
      <button>{page - 1}</button>
      <Text fontWeight={"bold"}>{page}</Text>
      <button>{page + 1}</button>
      <button
        onClick={() => handlePage(+1)}
        style={{ fontWeight: "bold" }}
        hidden={!PRODUCTS[7]}
      >
        {">>"}
      </button>
    </HStack>
  );
}

export function SearchDrower() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const dispatch = useDispatch();
  const { params, PRODUCTS } = useSelector((store) => store.productsManager);

  const handleSearch = (e) => {
    dispatch(get_products({ q: e.target.value }));
  };

  return (
    <div>
      <button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <Search2Icon boxSize="20px" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <DrawerHeader textAlign={"center"}>SEARCH</DrawerHeader>
            <HStack>
              <Input border={"1px solid"} onChange={handleSearch} />
              <Button
                {...ButtonStyle}
                onClick={() => dispatch(get_products({ q: undefined }))}
              >
                X
              </Button>
            </HStack>
            {params.q &&
              PRODUCTS.map((el) => (
                <div key={el._id}>
                  <Divider />
                  <br />
                  <HStack
                    as={Link}
                    href={`/products/${el._id}`}
                    justify="space-between"
                  >
                    <Text>{el.product_name}</Text>
                    <Text>{el.brand}</Text>
                  </HStack>
                </div>
              ))}
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              CLOSE
            </Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export const filters = [
  { title: "category", subtitles: ["Shoes", "Clothing"] },
  { title: "brand", subtitles: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"] },
  { title: "gender", subtitles: ["Men", "Women"] },
  {
    title: "price",
    subtitles: [
      [0, " - ", 299],
      [300, " - ", 599],
      [600, " - ", 899],
      [900, " - ", 1199],
      [1200, " - ", 1599],
    ],
  },
];
