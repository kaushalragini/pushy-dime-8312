import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import search from "../images/search.png";
import { FaRegBell } from "react-icons/fa";
import "../styles/Navbar.css";
import SidebarDrawer from "./SidebarDrawer";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../Redux/Auth/Auth.actions";
const Navbar = () => {
  const dispatch = useDispatch();

  const { userData } = useSelector((state) => state.authManager);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div className="nav-main">
      <Box className="drawwer-button">
        <SidebarDrawer />
      </Box>
      <Text fontWeight="600" fontSize="30px" color="#000">
        UpStyle
      </Text>
      <Box className="Search-field">
        <InputGroup width={"350px"} size="sm" mt={"5px"}>
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={
              <img src={search} style={{ width: "20px" }} alt="search" />
            }
          />
          <Input
            borderColor={"blue.300"}
            className="Search-input"
            placeholder="Search"
            textColor={"black"}
          />
          <InputRightElement
            children={
              <Button
                size="sm"
                _hover={{ bgColor: "blue.400" }}
                bgColor={"blue.300"}
              >
                GO
              </Button>
            }
          />
        </InputGroup>
      </Box>
      <div className="nav-right">
        <Box mt={"10px"}>
          <FaRegBell size={"25px"} />
        </Box>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <div>
          <Text fontWeight="600">{userData?.name}</Text>
          <Text>Admin</Text>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
