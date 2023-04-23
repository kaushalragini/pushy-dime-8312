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
  Flex,
} from "@chakra-ui/react";
import {
  delete_from_cart,
  get_cart,
  update_cart,
} from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";
import { UnlockIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { BsCartX } from "react-icons/bs";
import useToastCompo from "../../CustomHook/useToast";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartDrower() {
  // store related logic
  let { CART } = useSelector((store) => store.cartManager);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  // related to drower opening
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const decreaseProdQuantity = (_id, quantity) => {
    dispatch(update_cart(_id, quantity - 1, Toast));
  };

  const increaseProdQuantity = (_id, quantity) => {
    dispatch(update_cart(_id, quantity + 1, Toast));
  };

  useEffect(() => {
    dispatch(get_cart());
  }, []);

  return (
    <>
      <button
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
        onClick={onOpen}
      >
        <AiOutlineShoppingCart fontSize="23px" />
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
          <DrawerHeader>CART</DrawerHeader>
          <Divider />
          <DrawerBody>
            {CART.length === 0 ? (
              <Flex h="50dvh" alignItems="center" justifyContent="center">
                <Box as="span">
                  <BsCartX fontSize="200px" />
                  <Text textAlign="center" fontSize="25px" mt="20px">
                    Your Cart is Empty
                  </Text>
                </Box>
              </Flex>
            ) : (
              <VStack>
                {CART?.map((el) => (
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
                        dispatch(delete_from_cart(el._id, Toast));
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
                          <Button
                            isDisabled={+el.quantity === 1}
                            onClick={() =>
                              decreaseProdQuantity(el._id, el.quantity)
                            }
                            {...ButtonStyle}
                            size="sm"
                          >
                            -
                          </Button>
                          <Button {...ButtonStyle} size="sm" w="70%">
                            {el.quantity}
                          </Button>
                          <Button
                            onClick={() =>
                              increaseProdQuantity(el._id, el.quantity)
                            }
                            {...ButtonStyle}
                            size="sm"
                          >
                            +
                          </Button>
                        </HStack>
                      </Stack>
                    </Stack>
                    <Divider mt="5px" border={"1px solid"} />
                  </Box>
                ))}
              </VStack>
            )}
          </DrawerBody>
          <DrawerFooter justifyContent={"space-between"}>
            <Button
              as={Link}
              to="/checkout"
              {...ButtonStyle}
              w="100%"
              onClick={onClose}
              isDisabled={CART?.length === 0}
            >
              CHECKOUT
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
