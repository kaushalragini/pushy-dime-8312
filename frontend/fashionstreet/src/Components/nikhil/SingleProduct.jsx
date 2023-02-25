import {
  Badge,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import CartDrower from "./CartDrower";
import { MyCarausel } from "./MyCarausel";
import { add_to_cart } from "../../Redux/Cart/action";
import { useDispatch, useSelector } from "react-redux";
import { ButtonStyle } from "./nikhil.css";
import { NavLink, useParams } from "react-router-dom";
import { get_single_product } from "../../Redux/Products/action";

export default function SingleProduct() {
  const dispatch = useDispatch();
  const params = useParams();

  const Style = {
    w: { base: "100%", sm: "50%", md: "50%", lg: "50%" },
    p: "20px",
  };

  const { PRODUCTS } = useSelector((store) => store.productsManager);

  const data = PRODUCTS[0];

  useEffect(() => {
    dispatch(get_single_product(params.id));
  }, []);

  return !PRODUCTS.length ? (
    <Text>LOADING...</Text>
  ) : (
    <Box textAlign={"justify"} minH="100vh">
      <Flex
        flexWrap={"wrap"}
        justify={"space-between"}
        p={{ base: "0px", sm: "5px", md: "5px", lg: "20px" }}
        border={"1px solid #D6D6D6"}
        m="20px"
      >
        <Stack h="250px" {...Style}>
          <MyCarausel data={data} />
        </Stack>
        <Stack {...Style} justify="space-between">
          <Heading>{data.product_name}</Heading>
          <Text color={"red.700"} fontWeight="bold">
            {data.brand}
          </Text>
          <Text>PRICE: {data.price}</Text>

          <Text>CATEGEORY: {data.category}</Text>
          <Text>Earn up to 1312 points when you buy.</Text>

          <Button
            {...ButtonStyle}
            onClick={() =>
              dispatch(add_to_cart({ ...data, quantity: 1, size: "SM" }))
            }
          >
            ADD TO CART
          </Button>
        </Stack>
        <Stack {...Style}>
          <Heading {...H3Style}>Shop With UPSTYLE Concierge</Heading>
          <Text>
            UPSTYLE Concierge helps you shop 500+ stores in one place. A premium
            benefit exclusively reserved for Silver and above members.
            <Link href="#">Learn More</Link>
          </Text>
        </Stack>
        <Stack {...Style} justify="center" align={"center"}>
          <Text>Available exclusively for Silver and above members.</Text>
          <Link href="#">TRY SILVER</Link>
        </Stack>
      </Flex>
      <SetAlert />
      <Stack p="20px" border={"1px solid #D6D6D6"} m="20px">
        <Heading {...H3Style}>About {data.brand}</Heading>
        <Text>
          {data.brand} is essentially a mindset: slightly out of the schemes and
          subtly subversive. It’s an unpredictable visual language: graphic,
          rigorous, in which Consuelo Castiglioni, the Swiss-born designer,
          conveys her personal sense of elegance and experimental approach to
          materials and colors, her unique flair for mixing prints and shapes in
          collections that are at once irreverent and emotional, with an
          eclectic yet coherent design. Age and status are irrelevant to her:
          she encourages women to express themselves through clothes, mixing
          pieces from different seasons in endlessly new, utterly individual
          permutations.
        </Text>
      </Stack>
    </Box>
  );
}

export function SetAlert() {
  return (
    <div>
      <Stack p={"20px"}>
        <HStack justify={"space-between"}>
          <Heading {...H3Style}>Subscribe To Alerts</Heading>
          <Button {...ButtonStyle}>SET ALERT</Button>
        </HStack>

        <Text>
          We'll keep our eyes out for you. Subscribe to receive automatic email
          and app updates to be the first to know when this item becomes
          available in new stores, sizes or prices.
        </Text>
        <Image
          w="100vw"
          src="https://modesens.com/banner/15067/getimg/?img=%2Fbanner%2F20230223-modesens-Mytheresa-1440x250-EN.jpg"
        />
      </Stack>
    </div>
  );
}

const H3Style = {
  size: "md",
};
