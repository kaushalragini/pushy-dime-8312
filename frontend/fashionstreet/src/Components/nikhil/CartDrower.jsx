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
import { UnlockIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function CartDrower() {
  // store related logic
  let { CART } = useSelector((store) => store.cartManager);
  const dispatch = useDispatch();

  // related to drower opening
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  useEffect(() => {
    dispatch(get_cart());
  }, []);

  console.log(CART);

  return (
    <>
      <button onClick={onOpen}>CART</button>
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
                CART.map((el) => (
                  <Box key={el.productsId._id} position={"relative"}>
                    <button
                      style={{
                        position: "absolute",
                        right: 0,
                        top: 0,
                        fontSize: "20px",
                        color: "#c53030",
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        dispatch(delete_from_cart(el.productsId._id));
                      }}
                    >
                      x
                    </button>
                    <Stack justify={"space-between"} p="10px">
                      <Link to={`/products/${el.productsId._id}`}>
                        <Image src={el.productsId.img} />
                      </Link>

                      <Stack justify={"space-between"}>
                        <Text fontWeight={"bold"}>
                          {el.productsId.product_name}
                        </Text>

                        <Text fontSize="20px">{el.productsId.title}</Text>
                        <Text>Size : {el.size}</Text>
                        <Text>
                          Price : ₹{" "}
                          <span style={{ color: "green", fontWeight: "bold" }}>
                            {el.productsId.price}
                          </span>
                        </Text>
                        <HStack w="100%" justify={"space-between"}>
                          <Button {...ButtonStyle} size="sm">
                            -
                          </Button>
                          <Button {...ButtonStyle} size="sm" w="70%">
                            {el.quantity}
                          </Button>
                          <Button {...ButtonStyle} size="sm">
                            +
                          </Button>
                        </HStack>
                      </Stack>
                    </Stack>
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
