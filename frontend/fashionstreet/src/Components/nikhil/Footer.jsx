import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import {
  RiTwitterFill,
  RiFacebookBoxFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <Box textAlign={"justify"}>
      <Box p={"20px"} border="1px solid #d6d6d6">
        <Heading>UpStyle</Heading>
        <br />
        <Text>
          From streets to the fashion walks of Haute Couture, streetwear is
          slowly dominating the fashion industry even though the meaning of the
          word is pretty simple. Emerging from the 70s in the streets and skater
          culture while hip-hop and punk bands were becoming famous in the music
          industry, we have seen how streetwear fashion has stayed in the game
          to date. And now, it’s more than just comfort and casual. Streetwear
          fashion allows you to be who you are and helps you create an identity
          while boosting your creative streak!
        </Text>
        <Link href={"#"}>Read More</Link>
      </Box>
      <Flex flexWrap={"wrap"} gap="30px" p={"20px"} justify="space-between">
        {LINKS.map((el) => (
          <Stack key={el} w="200px">
            <LinkComp el={el} />
          </Stack>
        ))}
        <Stack w="250px">
          <Text>
            Join the UpStyle community to get exclusive access to the coolest
            events.
            <br />
            <br />
            be a part of the UpStyle Community
          </Text>
          <Input />
        </Stack>
        <Stack w="200px">
          <Text fontWeight={"bold"}>FOLLOW US</Text>
          <HStack>
            <RiTwitterFill size={40} />
            <RiFacebookBoxFill size={40} />
            <RiInstagramFill size={40} />
          </HStack>
        </Stack>
      </Flex>
    </Box>
  );
}

export const LinkComp = ({ el }) => {
  return (
    <>
      {el.map((link) => (
        <Link to="#" key={link}>
          {link}
        </Link>
      ))}
    </>
  );
};

export const LINKS = [
  [
    "About us",
    "Shop the Look",
    "Blogs",
    "Contact us",
    "Terms of Service",
    "Refund policy",
  ],
  ["Men", "Women", "Boys", "Girls", "All", "Casual", "Shoes"],
  [
    "Terms of Service",
    "Privacy Policy",
    "Shipping & Returns",
    "Cancellation policy",
    "Refund policy",
  ],
];
