import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "../styles/TrendingItem.css";
import vector from "../images/vector.png";
import axios from "axios";
const TrendingItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrderProducts();
  }, []);

  const getOrderProducts = () => {
    const token = localStorage.getItem("token");
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/orderedproducts/all`,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="Trending-main-box">
      <Heading fontSize={"18px"} mb="10px">
        Top products by unit sold
      </Heading>
      {data?.map((e, i) => {
        if (i === 4) {
          return null;
        } else {
          return (
            <>
              <Flex
                gap={"20px"}
                wrap="wrap"
                justifyContent="space-evenly"
                alignItems={"center"}
                key={e._id}
              >
                <Box className="trending-image">
                  <img src={e.productsId.img} alt={e.productsId.product_name} />
                </Box>
                <Text>
                  {e.productsId.product_name.split(" ").splice(0, 3).join(" ")}
                  ...
                </Text>
                <Text>{Math.floor(Math.random() * 501) + 1500}</Text>
                <img src={vector} alt="vector" />
                <Text>{Math.floor(Math.random() * 31) + 20}%</Text>
              </Flex>
              <div className="latest-line"></div>
            </>
          );
        }
      })}
    </div>
  );
};

export default TrendingItem;
