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
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { get_products } from "../../Redux/Products/action";
import RangeSliderComp from "./RangeSlider";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const filters = [
    { title: "categeory", subtitles: ["men", "women", "boys", "girls"] },
    { title: "brand", subtitles: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"] },
    { title: "size", subtitles: ["SM", "MD", "LG", "XL"] },
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

  const { params } = useSelector((store) => store.productsManager);

  const handleClick = (main, sub) => {
    if (main === "brand") {
      dispatch(get_products({ ...params, page: 1, brand: sub }));
    } else if (main === "categeory") {
      dispatch(get_products({ ...params, page: 1, brand: sub }));
    } else if (main === "size") {
      dispatch(get_products({ ...params, page: 1, brand: sub }));
    } else if (main === "price") {
      dispatch(get_products({ ...params, page: 1, min: sub[0], max: sub[2] }));
    }
  };

  const dispatch = useDispatch();

  return (
    <>
      <Stack
        position="absolute"
        top={0}
        h={"100vh"}
        w="250px"
        p="10px"
        textAlign="left"
      >
        <Stack p="15px">
          <Heading size={"md"}>FILTERS</Heading>
          <Text
            hidden={!params.brand}
            border="1px solid"
            position={"relative"}
            p="5px"
          >
            {params.brand}
            <button
              style={{ position: "absolute", right: "10px" }}
              onClick={() =>
                dispatch(get_products({ ...params, brand: undefined }))
              }
            >
              X
            </button>
          </Text>
          <Text
            hidden={!params.min}
            border="1px solid"
            position={"relative"}
            p="5px"
          >
            ${params.min} - ${params.max}
            <button
              style={{ position: "absolute", right: "10px" }}
              onClick={() =>
                dispatch(
                  get_products({ ...params, min: undefined, max: undefined })
                )
              }
            >
              X
            </button>
          </Text>
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
        {/* <AiTwotoneFilter size={"30"} /> */}
        <Text fontWeight={"bold"}> FILTER</Text>
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
    <>
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
    </>
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
    <HStack gap={"20px"} justify={"center"} fontSize="20px" p="10px">
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
