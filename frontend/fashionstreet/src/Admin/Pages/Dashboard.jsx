import {
  Flex,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Skeleton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import DisplayFeature from "../Components/DisplayFeature";
import "../styles/Dashboard.css";
import vector from "../images/vector.png";
import vectors from "../images/vector2.png";
import vector2 from "../images/vector3.png";
import cart from "../images/cart.png";
import bag from "../images/bag.png";
import earn from "../images/earning.png";
import SalesChart from "../Components/Chart";
import LatestOrder from "../Components/LatestOrder";
import TrendingItem from "../Components/TrendingItem";
import { useDispatch, useSelector } from "react-redux";
import { getAdminStats } from "../../Redux/AdminStats/AdminStats.actions";
const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    loading,
    cartPercentage,
    checkoutPercentage,
    totalRevenue,
    conversionRate,
  } = useSelector((state) => state.adminStatsManager);

  useEffect(() => {
    dispatch(getAdminStats());
  }, []);

  return (
    <div className="dashboard-main">
      <Heading color="gray.500" textAlign={"left"}>
        Dashboard
      </Heading>
      <Grid
        margin="auto"
        w="fit-content"
        gap={{ lg: "20px", md: "15px", sm: "10px", base: "5px" }}
        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}
      >
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <DisplayFeature
              name="Conversion rate"
              perOne={conversionRate + "%"}
              img2={vectors}
              img1={vector}
              // perTwo={"23%"}
            />
          </Skeleton>
        </GridItem>
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <DisplayFeature
              name="Added to Cart"
              perOne={cartPercentage + "%"}
              img2={cart}
              img1={vector2}
              // perTwo={"5%"}
            />
          </Skeleton>
        </GridItem>
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <DisplayFeature
              name="Reached Checkout"
              perOne={checkoutPercentage + "%"}
              img2={bag}
              img1={vector2}
              // perTwo={"23%"}
            />
          </Skeleton>
        </GridItem>
        <GridItem>
          <Skeleton isLoaded={!loading}>
            <DisplayFeature
              name="Sales"
              perOne={"₹" + totalRevenue}
              img2={earn}
              img1={vector}
              // perTwo={"23%"}
            />
          </Skeleton>
        </GridItem>
      </Grid>
      <SalesChart />
      <Skeleton isLoaded={!loading}>
        <LatestOrder />
      </Skeleton>
      <Flex mt="10px" wrap="wrap" justifyContent={"space-around"}>
        {/* <TrendingItem /> */}
      </Flex>
    </div>
  );
};

export default Dashboard;
