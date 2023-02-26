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
    
    Stack,
    Text,
    Toast,
    
  } from "@chakra-ui/react";
  
  import React, { useEffect, useState } from "react";
  import { Navigate, useNavigate } from "react-router-dom";
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
  
  
  const AdminSignup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword]=useState("")
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [dob, setDob] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [company, setCompany] = useState("");
    const [gst, setGst] = useState("");
    
   
    // useEffect(() => {
    //   setTimeout(() => {
    //     onOpen();
    //   }, 5000);
    // }, []);
    const navigate=useNavigate()
    const handleSubmit = () => {
  
      const payload = {
        name,
        email,
        password,
        address,
        pincode,
        dob,
        gender,
        age,
        company,
        gst,
        is_admin:true,
      };
      console.log(payload);
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
            navigate("/login")
          }
        })
        .catch((err) => {
            Toast(err?.response?.data?.msg, "error");
            console.log(err);
        });
    };
  
    
    return (
      <div>
        {/* -------------I AM GOING TO COMMENT THIS FOR SOME TIME======== */}
        <Grid templateColumns="repeat(2, 1fr)" ml={200} mr={150} mt={"10px"}>
          {/* ================I HAVE TO PUT THE LINE HERE+++++++++++++++ */}
          <GridItem w="100%" h="1200px" bg="black">
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
                  <Heading fontSize={"2xl"} color={"gray.600"}>
                    Want To Become Admin
                  </Heading>
                  <Text fontSize={"15px"} color={"gray.800"} wordBreak={"20px"}>
                    Create Admin Account
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

                      <FormControl id="address">
                        <FormLabel>ADDRESS</FormLabel>
                        <Input
                          type="text"
                          name="address"
                          placeholder="Address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="pincode">
                        <FormLabel>Pincode</FormLabel>
                        <Input
                          type="number"
                          name="pincode"
                          placeholder="Pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="dob">
                        <FormLabel>Date of Birth</FormLabel>
                        <Input
                          type="date"
                          name="dob"
                          placeholder="DOB"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="gender">
                        <FormLabel>Gender</FormLabel>
                        <Input
                          type="text"
                          name="gender"
                          placeholder="Gender"
                          value={gender}
                          onChange={(e) => setGender(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="age">
                        <FormLabel>Age</FormLabel>
                        <Input
                          type="number"
                          name="age"
                          placeholder="Age"
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="company">
                        <FormLabel>Company Name</FormLabel>
                        <Input
                          type="text"
                          name="company"
                          placeholder="Company"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                        />
                      </FormControl>

                      <FormControl id="gst">
                        <FormLabel>GST</FormLabel>
                        <Input
                          type="number"
                          name="gst"
                          placeholder="Gst"
                          value={gst}
                          onChange={(e) => setGst(e.target.value)}
                        />
                      </FormControl>
                     
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
  
  export default AdminSignup;
  