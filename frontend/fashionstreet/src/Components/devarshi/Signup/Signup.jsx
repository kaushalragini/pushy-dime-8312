import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDataSaverOn } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { AiFillTrophy } from "react-icons/ai";
import bag from "../png/bag.png";
import bell from "../png/bell.png";
import google from "../png/google.jpg";
import facebook from "../png/Facebook_icon.png";
import apple from "../png/Apple_logo_black.jpg";
import wechat from "../png/wechat.png";
// import note from "./png/note.jpg";
import { Link } from "react-router-dom";
import useToastCompo from "../../../CustomHook/useToast";
import { isAllPresent } from "./Signuplogic";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Toast } = useToastCompo();
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     onOpen();
  //   }, 5000);
  // }, []);

  const handleSubmit = () => {
    if (!isAllPresent(password)) {
      Toast(
        "Password should contain one uppecase,lowercase,number and special character",
        "success"
      );
      return;
    }
    const payload = {
      name,
      email,
      password,
    };
    fetch(`${process.env.REACT_APP_URL}/users/register`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        Toast(res.msg, "success");
        if (res.msg === `Hello! ${name} Your Account is created`) {
          navigate("/login");
        }
      })
      .catch((err) => {
        Toast(err?.response?.data?.msg, "error");
            console.log(err);
      });
  };

  // Toast("SignUp Failed", err.response.data.msg)
  // const sendLogin=()=>{
  // navigate()
  // }
  return (
    <div>
      {/* -------------I AM GOING TO COMMENT THIS FOR SOME TIME======== */}
      <Grid templateColumns="repeat(2, 1fr)" ml={200} mr={150} mt={"10px"}>
        {/* ================I HAVE TO PUT THE LINE HERE+++++++++++++++ */}
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
            <Text
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
            </Text>
          </Heading>

          <Heading
            color={"white"}
            fontSize={"16px"}
            fontWeight={400}
            mt={"5px"}
            ml={20}
          >
            <Image src={bell} alt="bell" w={"30px"} h={"30px"} bg={"none"} />
            <Text
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
            </Text>
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
            <Text
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
            </Text>
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
            <Text
              style={{
                position: "relative",
                left: "40px",
                bottom: "25px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              MANAGE YOUR SHOPPING LISTS
            </Text>
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
            <Text
              style={{
                position: "relative",
                left: "40px",
                bottom: "27px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
              EARN POINTS
            </Text>
          </Heading>
        </GridItem>

        {/* =========================Signup Card======================================== */}
        <GridItem w="100%" h="800px">
          <Flex minH={"100vh"} align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"xl"} color={"gray.600"}>
                  Create An Account
                </Heading>
                <Text fontSize={"15px"} color={"gray.800"} wordBreak={"20px"}>
                  Unleash your shopping power.
                </Text>
                <Text fontSize={"15px"} color={"gray.800"} lineHeight={"5px"}>
                  Check UpStyle befire you buy.
                </Text>
              </Stack>
              <Box rounded={"lg"} p={8}>
                <Box>
                  <Stack spacing={4}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        type="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        paddingRight={"200px"}
                        paddingLeft={"30px"}
                        placeholder="Name"
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Email</FormLabel>
                      <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        paddingRight={"200px"}
                        paddingLeft={"30px"}
                        placeholder="Email"
                      />
                    </FormControl>
                    {/* <Text>{formErrors.email}</Text> */}
                    <FormControl id="password">
                      <FormLabel>Password</FormLabel>
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormControl>
                    {/* <Text>{formErrors.password}</Text> */}
                    {/* <Input type="submit" /> */}

                    <Stack spacing={10}>
                      <Stack
                        direction={{ base: "column", sm: "row" }}
                        align={"start"}
                        justify={"space-between"}
                      >
                        <Checkbox>
                          Subscribe to personalized sale updates and offers
                        </Checkbox>
                        {/* <Link color={'blue.400'}>Forgot password?</Link> */}
                      </Stack>

                      <Button
                        bg={"black"}
                        color={"white"}
                        _hover={{
                          bg: "black",
                        }}
                        onClick={handleSubmit}
                      >
                        SIGN UP
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
                <Heading
                  fontSize={"15px"}
                  color={"gray.500"}
                  mt="40px"
                  textAlign={"center"}
                >
                  or
                </Heading>

                <Box display="flex" gap="70px" mt="20px">
                  <Image src={google} w="10%" objectFit={"contain"} />
                  <Image src={facebook} w="8%" objectFit={"contain"} />
                  <Image src={apple} w="8%" objectFit={"contain"} />
                  <Image src={wechat} w="10%" objectFit={"contain"} />
                </Box>
                <Link to="/login">
                  <Text mt="20px" textAlign={"center"}>
                    Already have an account? Please sign in
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

export default Signup;
