import { HamburgerIcon } from "@chakra-ui/icons";
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
import { Link } from "react-router-dom";
import { get_products } from "../../Redux/Products/action";
import { useDispatch, useSelector } from "react-redux";

const token = localStorage.getItem("token");

export default function Navbar() {
  const { params } = useSelector((store) => store.productsManager);
  const dispatch = useDispatch();

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
          <Heading as={Link} to="/" fontFamily="mono">
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
                  {main.brands.map((brand) => (
                    <Link
                      to={`/products`}
                      key={brand}
                      onClick={() => dispatch(get_products({ brand }))}
                    >
                      {brand}
                    </Link>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
          ))}
          <Link to={`/order/status`}>ORDERS</Link>
        </HStack>

        <HStack justify={"right"} gap="12px">
          <Box>
            <SearchDrower />
          </Box>
          {!token ? (
            <Link to="/login">LOGIN</Link>
          ) : (
            <Link to="/" onClick={() => localStorage.removeItem("token")}>
              LOGOUT
            </Link>
          )}

          <Box>
            <CartDrower />
          </Box>
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
  const dispatch = useDispatch();
  return (
    <div>
      <HStack justify={"space-between"} w="100%">
        <Heading as={Link} ref={btnRef} colorScheme="teal" onClick={onOpen}>
          <HamburgerIcon boxSize={"20px"} />
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
              <Heading as={Link} to="/" fontFamily="mono">
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
                        {main.brands.map((brand) => (
                          <Link
                            to="/products"
                            key={brand}
                            onClick={() => dispatch(get_products({ brand }))}
                          >
                            {brand}
                          </Link>
                        ))}
                      </PopoverContent>
                    </Popover>
                  </div>
                ))}
                <Link to={`/order/status`}>ORDERS</Link>
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
                <Button
                  {...ButtonStyle}
                  onClick={onClose}
                  as={Link}
                  to="/login"
                >
                  LOGIN
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
