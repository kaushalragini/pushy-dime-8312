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
} from "@chakra-ui/react";
import React from "react";
import RangeSliderComp from "./RangeSlider";
import { AiTwotoneFilter } from "react-icons/ai";

export default function Filter() {
  return (
    <>
      <Stack
        position="sticky"
        top={0}
        // overflowY="scroll"
        h={"100vh"}
        textAlign="left"
      >
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                CATEGEORY
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text>Cloathing</Text>
              <Text>Shoes</Text>
              <Text>Bags</Text>
              <Text>Accessories</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                SIZE
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <Text>SM</Text>
              <Text>MD</Text>
              <Text>LG</Text>
              <Text>XL</Text>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                PRICE RANGE
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel pb={4}>
              <RangeSliderComp />
            </AccordionPanel>
          </AccordionItem>
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
          <DrawerCloseButton />
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
  return (
    <>
      <Select textAlign={"right"} variant="unstyled" fontWeight={"bold"}>
        <option>SORT</option>
        <option>Price Low to High</option>
        <option>Price High to Low </option>
        <option>Price Low to High</option>
        <option>Price Low to High</option>
      </Select>
    </>
  );
}
