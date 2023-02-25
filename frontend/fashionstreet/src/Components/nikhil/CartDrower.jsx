import React, { useEffect } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
  Divider,
  VStack,
  Box,
  HStack,
  Image,
  Stack,
} from "@chakra-ui/react";
import { delete_from_cart, get_cart } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";

export default function CartDrower({ title = "CART" }) {
  // store related logic
  const { CART } = useSelector((store) => store.cartManager);
  const dispatch = useDispatch();

  // related to drower opening
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    dispatch(get_cart());
  }, []);


  // console.log(CART);

  return (
    <>
      <button onClick={onOpen}>{title}</button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>CART</DrawerHeader>
          <Divider />
          <DrawerBody>
            <VStack>
              {!CART.length ? (
                <Text>CART IS EMPTY</Text>
              ) : (
                CART.map((product) => (
                  <Box
                    key={product._id}
                    h="120px"
                    w="100%"
                    // p="10px"
                    position={"relative"}
                  >
                    <button
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontSize: "16px",
                        color: "#c53030",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        dispatch(delete_from_cart(product.id));
                      }}
                    >
                      x
                    </button>
                    <HStack justify={"space-between"} h="100%" p="10px">
                      <Image src={product.img} h="100%" objectFit={""} />
                      <Stack w="60%" h="100%" justify={"space-between"}>
                        <Text fontWeight={"bold"}>{product.product_name}</Text>

                        <Text fontSize="20px">{product.title}</Text>
                        <Text>Size : {product.size}</Text>
                        <Text>
                          Price : ₹{" "}
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {product.price}
                          </span>
                        </Text>
                        <HStack w="100%" justify={"space-between"}>
                          <Button {...ButtonStyle} size="sm">
                            -
                          </Button>
                          <Button {...ButtonStyle} size="sm" w="70%">
                            0
                          </Button>
                          <Button {...ButtonStyle} size="sm">
                            +
                          </Button>
                        </HStack>
                      </Stack>
                    </HStack>
                    <Divider mt="5px" border={"1px solid"} />
                  </Box>
                ))
              )}
            </VStack>
          </DrawerBody>
          <DrawerFooter justifyContent={"space-between"}>
            <Button {...ButtonStyle} w="100%">
              CHECKOUT
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
