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
    // <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
    <Box  display={{sm:"grid",md:"grid",lg:"flex"}} justifyContent="center" alignItems="center">
      {/* -------------I AM GOING TO COMMENT THIS FOR SOME TIME======== */}
      <Box   style={{background:"black"}} padding={{md:"80px",lg:"80px"}}>
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
        {/* ================I HAVE TO PUT THE LINE HERE+++++++++++++++ */}
        

        {/* =========================Signup Card======================================== */}
        <div w="100%" >
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
        </div>
      </Box>
   
  );
};

export default Signup;
