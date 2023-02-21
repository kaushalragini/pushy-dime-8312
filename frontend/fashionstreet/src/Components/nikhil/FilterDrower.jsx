import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import RangeSliderComp from "./RangeSlider";

export default function FilterDrower() {
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
