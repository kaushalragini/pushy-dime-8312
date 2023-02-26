import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import "../styles/DisplayFeature.css";

const DisplayFeature = ({ name, perOne, img1, perTwo, img2 }) => {
  return (
    <div>
      <Box className="main-box-window">
        <Box>
          <Text className="name" color={"gray.500"}>
            {name}
          </Text>
          <Heading
            size={{ lg: "lg", md: "md", sm: "md", base: "md" }}
            className="perc-first"
            fontSize={"30px"}
          >
            {perOne}
          </Heading>
        </Box>
        <Box mr="10px" className="vectorBox">
          <img src={img1} alt="vector" />
          <Text ml="10px" className="perc-second" color={"gray.400"}>
            {perTwo}
          </Text>
        </Box>
        <Box>
          <img src={img2} alt="vectors" />
        </Box>
      </Box>
    </div>
  );
};

export default DisplayFeature;
