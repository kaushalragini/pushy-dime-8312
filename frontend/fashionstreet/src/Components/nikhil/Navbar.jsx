import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
  Heading,
  HStack,
  Text,
  Button,
  Flex,
  VStack,
  Stack,
  Link,
  Image,
  Hide,
  Show,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";
import React from "react";
import CartDrower from "./CartDrower";
import { SearchDrower } from "./FilterDrower";
import { ButtonStyle } from "./nikhil.css";

// import { TOP_COLLECTION } from "./TopCollections";
// import SearchDrower from "./SearchDrower";

export default function Navbar() {
  return (
    <HStack
      justify={"space-between"}
      p="10px"
      position={"sticky"}
      top="0"
      bgColor={"white"}
      zIndex="1000"
      w="100%"
      h="50px"
      border={"1px solid #D6D6D6"}
    >
      <Show above="lg">
        <Box p="5px">
          <Heading as={Link} href="/" fontFamily="mono">
            UpStyle
          </Heading>
        </Box>

        <HStack justify={"space-evenly"} gap="20px">
          {LINKS.map((main) => (
            <div key={main.title}>
              <Popover key={main.title} trigger="hover">
                <PopoverTrigger>
                  <Link href="#">{main.title.toUpperCase()}</Link>
                </PopoverTrigger>
                <PopoverContent p="20px" w="200px">
                  {main.brands.map((brands) => (
                    <Link href="#" key={brands}>
                      {brands}
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          ))}
          <Link href="#">SHOP ALL</Link>
        </HStack>

        <HStack justify={"right"}>
          {/* <SearchDrower /> */}
          <SearchDrower />
          <CartDrower />
        </HStack>
      </Show>

      <Show below="lg">
        <HStack justify={"space-between"} w="100%">
          <NavDrawer />
          <Heading as={Link} href="/" fontFamily="mono">
            UpStyle
          </Heading>
          <SearchDrower />
        </HStack>
      </Show>
    </HStack>
  );
}

export function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <HStack justify={"space-between"} w="100%">
        <Heading as={Link} ref={btnRef} colorScheme="teal" onClick={onOpen}>
          =
        </Heading>
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Heading as={Link} href="/" fontFamily="mono">
                UpStyle
              </Heading>
            </DrawerHeader>

            <DrawerBody>
              <Stack justify={"space-evenly"} gap="20px">
                {LINKS.map((main) => (
                  <div key={main.title}>
                    <Popover key={main.title} trigger="hover">
                      <PopoverTrigger>
                        <Link href="#">{main.title.toUpperCase()}</Link>
                      </PopoverTrigger>
                      <PopoverContent p="20px" w="200px">
                        {main.brands.map((brands) => (
                          <Link href="#" key={brands}>
                            {brands}
                          </Link>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </div>
                ))}
                <Link href="#">SHOP ALL</Link>
              </Stack>
              <Image
                src="https://cdn.modesens.com/umedia/1713864s?w=800"
                position={"absolute"}
                bottom="0"
                w="295px"
              />
            </DrawerBody>

            <DrawerFooter zIndex={"20"}>
              <Stack w="100%">
                <Button {...ButtonStyle}>
                  <CartDrower />
                </Button>
                <Button {...ButtonStyle} onClick={onClose}>
                  ACCOUNT
                </Button>
              </Stack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </HStack>
    </div>
  );
}

export const LINKS = [
  {
    title: "women",
    brands: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"],
  },
  {
    title: "men",
    brands: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"],
  },
  {
    title: "girls",
    brands: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"],
  },
  {
    title: "boys",
    brands: ["AMIRI", "VERSACE", "BALENCIAGA", "MARNI"],
  },
];
