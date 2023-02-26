import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { RxDoubleArrowUp } from "react-icons/rx";
import { RiDashboard2Fill } from "react-icons/ri";
import { BsFillTagsFill } from "react-icons/bs";
import { ImUsers } from "react-icons/im";
import { MdFeedback } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../styles/Sidebar.css";
const Sidebar = ({ color = "#333840", textColor = "#7F8DA1" }) => {
  return (
    <div style={{ width: "15rem" }} className="sidebar-main">
      <Box
        width={"100%"}
        bgColor={color}
        height={"100vh"}
        textColor={textColor}
      >
        <VStack display={"inline-block"}>
          <Flex padding={"10px"}>
            <RxDoubleArrowUp size={"50px"} />
            <Link to="/">
              <Heading>Upstyle</Heading>
            </Link>
          </Flex>
          <div style={{ border: "1px solid #030c33", width: "100%" }}></div>
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
      </Box>
    </div>
  );
};

export default Sidebar;
