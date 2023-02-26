import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsFillTagsFill } from "react-icons/bs";
import { FaWarehouse } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImUsers } from "react-icons/im";
import { MdFeedback } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { RxDoubleArrowUp } from "react-icons/rx";
import { Link } from "react-router-dom";

const SidebarDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        <GiHamburgerMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex padding={"10px"}>
              <RxDoubleArrowUp size={"50px"} />
              <Link to="/">
                <Heading>Upstyle</Heading>
              </Link>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <div
              style={{
                border: "1px solid #030c33",
                width: "100%",
                margin: "10px",
              }}
            ></div>
            <VStack display={"inline"}>
              <Flex>
                <RiDashboard2Fill className="icons" />
                <Link to="/admin">
                  <Text>Dashboard</Text>
                </Link>
              </Flex>
              <Flex>
                <BsFillTagsFill className="icons" />
                <Link to="/admin/products">
                  <Text>Products</Text>
                </Link>
              </Flex>
              <Flex>
                <ImUsers className="icons" />
                <Link to="/admin/users">
                  <Text>Users</Text>
                </Link>
              </Flex>
              <Flex>
                <MdFeedback className="icons" />
                <Link to="/admin/feedback">
                  <Text>Feedback</Text>
                </Link>
              </Flex>
              <Flex>
                <FaWarehouse className="icons" />
                <Link to="/admin/orders">
                  <Text>Orders</Text>
                </Link>
              </Flex>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default SidebarDrawer;
