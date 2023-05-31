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
import { useDispatch } from "react-redux";
import { loginUser } from "../../../Redux/Auth/Auth.actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Toast } = useToastCompo();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const payload = {
      email,
      password,
    };

    dispatch(loginUser(payload, Toast, navigate));
  };
  return (
    <Box display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent="center" alignItems="center">
       <Box  style={{background:"black"}} padding={{md:"80px",lg:"80px"}} >
        <div>
        <p  style={{color:"white",
            fontSize:75,
            letterSpacing:1,
            fontFamily:"Serif",
            marginTop:20,
           
            textAlign:"center",
            fontWeight:100}}>UPSTYLE</p>
        <p style={{color:"white",
            fontSize:25,
            letterSpacing:1,
            fontFamily:"Serif",
          
           
            textAlign:"center",
            fontWeight:100}}> BY SHOPPERS FOR SHOPPERS</p>
            </div>
         <div style={{color:"white",
            fontSize:25,
            letterSpacing:1,
            fontFamily:"Serif",marginTop:50}}>
          <p> We're Your</p>
          <p>Shopping Assistant</p>
         </div>
         
          <div style={{ color:"white",
            fontSize:"16px",
            letterSpacing:2,
            fontWeight:400, marginTop:50,}}>
            <p> WITH US YOU CAN:</p>
          </div>

         

         

          

         
<div  style={{display:"flex",gap:"20px",marginTop:20}} 
            
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}>
              
  <div >  <Image src={bag} alt="bag" w={"30px"} h={"30px"} /></div>
  <div ><p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}> COMPARE PRICES ACROSS 500+ STORES</p> </div>
         
          </div>
<div  style={{display:"flex",gap:"20px",marginTop:20}} 
            
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}>
              
  <div > <Image src={bell} alt="bell" w={"30px"} h={"30px"} bg={"none"} /></div>
  <div ><p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}>GET PRICE DROP & SALE ALERT</p> </div>
         
          </div>
<div  style={{display:"flex",gap:"20px",marginTop:20}} 
            
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}>
              
  <div > <MdOutlineDataSaverOn fontSize={"30px"} color="white" /> </div>
  <div ><p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}>DISCOVER UPSTYLE CONCIERGE</p> </div>
         
          </div>
<div  style={{display:"flex",gap:"20px",marginTop:20}} 
            
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}>
              
  <div > <FaHeart fontSize={"30px"} color="white"/></div>
  <div ><p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}>MANAGE YOUR SHOPPING LISTS</p> </div>
         
          </div>
<div  style={{display:"flex",gap:"20px",marginTop:20}} 
            
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}>
              
  <div > <AiFillTrophy fontSize={"30px"} color="white"/></div>
  <div ><p style={{color:"white",fontSize:"18px",fontWeight:"bold"}}> EARN POINTS TOWARDS PURCHASES</p> </div>
         
          </div>

          <Heading
            color={"white"}
            fontSize={"16px"}
            letterSpacing={2}
            fontWeight={400}
            mt={"5px"}
            // ml={20}
            // textAlign={"left"}
          >
           
            {/* <Image src={bag} alt="bag" w={"25px"} h={"20px"} /> */}
            <Text
              style={{
                position: "relative",
                // left: "40px",
                bottom: "27px",
                fontWeight: "400",
                fontSize: "18px",
              }}
            >
             
            </Text>
          </Heading>
        </Box>
       
        {/* =========================Signup Card======================================== */}
        <div w="100%" h="800px">
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
                      LOGIN
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
        </div>
  
    </Box>
  );
};

export default Login;
