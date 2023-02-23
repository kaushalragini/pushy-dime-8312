import { Grid, GridItem, Heading,  } from "@chakra-ui/react";
import React from "react";
import DisplayFeature from "../Components/DisplayFeature";
import "../styles/Dashboard.css";
import vector from "../images/vector.png";
import vectors from "../images/vector2.png";
import vector2 from "../images/vector3.png";
import cart from "../images/cart.png";
import bag from "../images/bag.png";
import earn from "../images/earning.png";
const Dashboard = () => {
  return (
    <div className="dashboard-main">
      <Heading color="gray.500" textAlign={"left"}>
        Dashboard
      </Heading>
      <Grid templateColumns={{  lg: "repeat(4, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)" }}>
        <GridItem>
          <DisplayFeature
            name="Conversion rate"
            perOne={"3.72%"}
            img2={vectors}
            img1={vector}
            perTwo={"23%"}
          />
        </GridItem>
        <GridItem>
          <DisplayFeature
            name="Added to Cart"
            perOne={"12.92%"}
            img2={cart}
            img1={vector2}
            perTwo={"5%"}
          />
        </GridItem>
        <GridItem>
          <DisplayFeature
            name="Reached Checkout"
            perOne={"5.67%"}
            img2={bag}
            img1={vector2}
            perTwo={"23%"}
          />
        </GridItem>
        <GridItem>
          <DisplayFeature
            name="Sales"
            perOne={"$1,565"}
            img2={earn}
            img1={vector}
            perTwo={"23%"}
          />
        </GridItem>
      </Grid>
    </div>
  );
};

export default Dashboard;
