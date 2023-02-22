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
} from "@chakra-ui/react";
import React from "react";
import RangeSliderComp from "./RangeSlider";

export default function Filter() {
  const filters = [
    { title: "categeory", subtitles: ["men", "women", "boys", "girls"] },
    { title: "brand", subtitles: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"] },
    { title: "size", subtitles: ["SM", "MD", "LG", "XL"] },
  ];

  const price = { title: "price", subtitles: [0, 499, 999, 1599, 1999] };

  const handleClick = (main, sub) => {
    console.log(main, sub);
  };

  return (
    <>
      <Stack position="absolute" top={0} h={"100vh"} p="10px" textAlign="left">
        <Text>categeories {">"} mens</Text>
        <Accordion defaultIndex={[0]} allowMultiple minW={"200px"}>
          <Input placeholder="search for products" />
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

          <AccordionItem key={price.title}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={"bold"}>
                {price.title.toUpperCase()}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              {price.subtitles.map((el) => (
                <div key={el}>
                  <button onClick={() => handleClick(price.title, el)}>
                    {el}
                  </button>
                  <br />
                </div>
              ))}
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
    console.log(e.target.value);
  };
  return (
    <>
      <Select
        textAlign={"right"}
        variant="unstyled"
        fontWeight={"bold"}
        onChange={handleSort}
      >
        <option value={"all"}>SORT</option>
        <option value={{ name: "name", asc: "asc" }}>A to Z</option>
        <option value={["name", "desc"]}>Z to A</option>
        <option value={["price", "asc"]}>Price Low to High</option>
        <option value={["price", "desc"]}>Price High to Low </option>
      </Select>
    </>
  );
}
