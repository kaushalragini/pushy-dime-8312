import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/DisplayFeature.css";

const DisplayFeature = ({name,perOne,img1,perTwo,img2}) => {
  return (
    <div>
      <Box className="main-box-window">
        <Text className="name" color={"gray.300"}>{name}</Text>
        <Heading className="perc-first" fontSize={"30px"}>{perOne}</Heading>
        <img src={img1} alt="vector" className="vector" />
        <Text className="perc-second" color={"gray.300"} >
          {perTwo}
        </Text>
        <img src={img2} className="double-vector" alt="vectors" />
      </Box>
    </div>
  );
};

export default DisplayFeature;
