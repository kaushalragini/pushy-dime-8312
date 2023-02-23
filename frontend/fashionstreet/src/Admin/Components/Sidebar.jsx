import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RiDashboard2Fill } from "react-icons/ri";
import { BsFillTagsFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { MdFeedback } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import "../styles/Sidebar.css";
const Sidebar = () => {
  return (
    <div style={{ width: "15rem" }} className="sidebar-main">
      <Box width={"100%"} bgColor="blue.900">
        <VStack display={"inline-block"}>
          <Flex padding={"10px"}>
            <RxDoubleArrowUp size={"50px"} />
            <Heading>Upstyle</Heading>
          </Flex>
          <div style={{ border: "1px solid #030c33", width: "100%" }}></div>
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
      </Box>
    </div>
  );
};

export default Sidebar;
