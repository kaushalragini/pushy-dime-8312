import React from "react";
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
import {FaRegBell} from "react-icons/fa"
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <div>
      <Flex justifyContent={"space-between"} padding="5px">
        <Box className="Search-field">

        <InputGroup width={"350px"} size="sm" mt={"5px"} >
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
            children={
                <img src={search} style={{ width: "20px" }} alt="search" />
            }
            />
          <Input borderColor={"blue.300"}   placeholder="Search" textColor={"black"}/>
          <InputRightElement
            children={<Button size="sm"  _hover={{bgColor:"blue.400"}} bgColor={"blue.300"}>GO</Button>}
            />
        </InputGroup>
            </Box>
        <div className="nav-right">
        <Box mt={"10px"} >
        <FaRegBell size={"25px"} />
        </Box>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <div>
        <Text>Dan Abrahmov</Text>
        <Text>Adminstrator</Text>
        </div>
        </div>
      </Flex>
    </div>
  );
};

export default Navbar;
