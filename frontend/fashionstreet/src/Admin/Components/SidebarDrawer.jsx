import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent,  DrawerHeader, DrawerOverlay, Flex, Heading, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { useRef } from "react"
import { BsFillTagsFill } from "react-icons/bs"
import { FaWarehouse } from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import { ImUsers } from "react-icons/im"
import { MdFeedback } from "react-icons/md"
import { RiDashboard2Fill } from "react-icons/ri"
import { RxDoubleArrowUp } from "react-icons/rx"

 const SidebarDrawer=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef()
  
    return (
      <>
        <Button ref={btnRef} onClick={onOpen}>
          <GiHamburgerMenu/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
            <Flex padding={"10px"}>
            <RxDoubleArrowUp size={"50px"} />
            <Heading>Upstyle</Heading>
          </Flex>
            </DrawerHeader>
  
            <DrawerBody>
            <div style={{ border: "1px solid #030c33", width: "100%",margin:"10px" }}></div>
            <VStack display={"inline"} >

            <Flex>
            <RiDashboard2Fill className="icons" />
            <Text>Dashboard</Text>
          </Flex>
          <Flex>
            <BsFillTagsFill className="icons" />
            <Text>Products</Text>
          </Flex>
          <Flex>
            <ImUsers className="icons" />
            <Text>Users</Text>
          </Flex>
          <Flex>
            <MdFeedback className="icons" />
            <Text>Feedback</Text>
          </Flex>
          <Flex>
            <FaWarehouse className="icons" />
            <Text>Inventory</Text>
          </Flex>
            </VStack>
            </DrawerBody>
  

          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default SidebarDrawer