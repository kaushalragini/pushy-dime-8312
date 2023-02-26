import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./Login.css";
import React, { useState } from "react";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import bag from "../png/bag.png";
import bell from "../png/bell.png";
import google from "../png/google.jpg";
import facebook from "../png/Facebook_icon.png";
import apple from "../png/Apple_logo_black.jpg";
import wechat from "../png/wechat.png";
import { Link, useNavigate } from "react-router-dom";
import useToastCompo from "../../../CustomHook/useToast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Toast } = useToastCompo();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };
    fetch(`${process.env.REACT_APP_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Toast(res?.msg, "success");
        if (res.token) {
          localStorage.setItem("token", res.token);
          navigate("/");
        }
      })
      .catch((err) => {
        Toast(err?.response?.data?.msg, "error");
      });
  };
  return (
    <div>
      <Grid templateColumns="repeat(2, 1fr)" ml={200} mr={150} mt={"10px"}>
        <GridItem w="100%" h="800px" bg="black">
          <Heading
            color={"white"}
            fontSize={75}
            letterSpacing={1}
            fontFamily={"Serif"}
            mt={20}
            ml={20}
            textAlign={"left"}
            fontWeight={100}
          >
            UPSTYLE
          </Heading>
          <Heading
            color={"white"}
            fontSize={"25px"}
            letterSpacing={2}
            fontFamily={"Serif"}
            fontWeight={100}
            ml={"90px"}
            textAlign={"left"}
          >
            BY SHOPPERS FOR SHOPPERS
          </Heading>
          <Heading
            color={"white"}
            fontSize={40}
            letterSpacing={2}
            fontWeight={100}
            mt={"100px"}
            ml={20}
            textAlign={"left"}
          >
            We're Your
          </Heading>
          <Heading
            color={"white"}
            fontSize={40}
            letterSpacing={2}
            fontWeight={100}
            // mt={"100px"}
            ml={20}
            textAlign={"left"}
          >
            Shopping Assistant
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            letterSpacing={2}
            fontWeight={400}
            mt={"50px"}
            ml={20}
            textAlign={"left"}
          >
            WITH US YOU CAN:
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            // letterSpacing={2}
            fontWeight={400}
            mt={"30px"}
            ml={20}
            // textAlign={"left"}
          >
            <Image src={bag} alt="bag" w={"30px"} h={"30px"} />
            <span
              style={{
                position: "relative",
                left: "40px",
                bottom: "23px",
                fontWeight: "400",
                fontSize: "18px",
                wordSpacing: "2px",
              }}
            >
              COMPARE ACROSS 500+ STORES
            </span>
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            // letterSpacing={2}
            fontWeight={400}
            mt={"5px"}
            ml={20}
            // textAlign={"left"}
          >
            {/* <BsBell color={"white"} fontSize={"25px"}/> */}
            <Image src={bell} alt="bell" w={"30px"} h={"30px"} bg={"none"} />
            <span
              style={{
                position: "relative",
                left: "40px",
                bottom: "27px",
                fontWeight: "400",
                fontSize: "18px",
                wordSpacing: "2px",
              }}
            >
              GET ALERTS ON YOUR ITEMS
            </span>
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}
            ml={20}
          >
            {/* <Image src={note} alt="bag" w={"25px"} h={"20px"} color={"white"}/> */}
            <MdOutlineDataSaverOn fontSize={"30px"} />
            <span
              style={{
                position: "relative",
                left: "40px",
                bottom: "27px",
                fontWeight: "400",
                fontSize: "18px",
                wordSpacing: "2px",
              }}
            >
              SAVE YOUR SEARCHES
            </span>
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}
            ml={20}
            // textAlign={"left"}
          >
            <FaHeart fontSize={"30px"} />
            {/* <Image src={bag} alt="bag" w={"25px"} h={"20px"} /> */}
            <span
              style={{
                position: "relative",
                left: "40px",
                bottom: "25px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              MANAGE YOUR SHOPPING LISTS
            </span>
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}
            ml={20}
            // textAlign={"left"}
          >
            <AiFillTrophy fontSize={"30px"} />
            {/* <Image src={bag} alt="bag" w={"25px"} h={"20px"} /> */}
            <span
              style={{
                position: "relative",
                left: "40px",
                bottom: "27px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              EARN POINTS
            </span>
          </Heading>
        </GridItem>
        {/* =========================Signup Card======================================== */}
        <GridItem w="100%" h="800px">
          <Flex minH={"100vh"} align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"xl"} color={"gray.600"}>
                  Log in to your account
                </Heading>
                <Text fontSize={"15px"} color={"gray.800"} wordBreak={"20px"}>
                  Unleash your shopping power.
                </Text>
                <Text fontSize={"15px"} color={"gray.800"} lineHeight={"5px"}>
                  Check UpStyle befire you buy.
                </Text>
              </Stack>
              <Box rounded={"lg"} p={8}>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      paddingRight={"200px"}
                      paddingLeft={"30px"}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </FormControl>
                  <Stack spacing={10}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      {/* <Checkbox>Subscrib</Checkbox> */}
                      {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                    </Stack>
                    <Button
                      onClick={handleSubmit}
                      bg={"black"}
                      color={"white"}
                      _hover={{
                        bg: "black",
                      }}
                    >
                      LOG IN
                    </Button>
                  </Stack>
                </Stack>
                <Heading
                  fontSize={"15px"}
                  color={"gray.500"}
                  textAlign={"center"}
                  mt="40px"
                >
                  or
                </Heading>

                <Box display="flex" gap="70px" mt="20px">
                  <Image src={google} w="10%" objectFit={"contain"} />
                  <Image src={facebook} w="8%" objectFit={"contain"} />
                  <Image src={apple} w="8%" objectFit={"contain"} />
                  <Image src={wechat} w="10%" objectFit={"contain"} />
                </Box>
                <Link to="/signup">
                  <Text mt="20px" textAlign={"center"}>
                    Don't have an account?Please sign up
                  </Text>
                </Link>
                <Link to="/admin/signup">
                  <Text mt="20px" textAlign={"center"}>
                    Want to become admin. Click here!
                  </Text>
                </Link>
              </Box>
            </Stack>
          </Flex>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Login;
