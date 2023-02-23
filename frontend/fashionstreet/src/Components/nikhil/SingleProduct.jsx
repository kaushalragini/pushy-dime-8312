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

export default function SingleProduct() {
  const dispatch = useDispatch();

  const Style = {
    w: { base: "100%", sm: "50%", md: "50%", lg: "50%" },
    p: "20px",
  };

  const H3Style = {
    size: "md",
  };

  return (
    <Container maxW={"1200px"} textAlign={"justify"}>
      <Text fontSize={"10px"}>
        MODESENS / DESIGNERS / MARNI / MEN / CLOTHING / ACTIVEWEAR / TOPS
      </Text>
      <CartDrower />
      <Flex flexWrap={"wrap"} justify={"space-between"}>
        <Stack h="250px" {...Style}>
          <MyCarausel data={data} />
        </Stack>
        <Stack {...Style} justify="space-between">
          <Heading>{data.product_name}</Heading>
          <Text color={"red.700"} fontWeight="bold">{data.brand}</Text>
          <Text>PRICE: {data.price}</Text>

          <Text>CATEGEORY: {data.category}</Text>
          <Text>Earn up to 1312 points when you buy.</Text>

          <Button {...ButtonStyle} onClick={() => dispatch(add_to_cart(data))}>
            ADD TO CART
          </Button>
        </Stack>
        <Stack {...Style}>
          <Heading {...H3Style}>Shop With ModeSens Concierge</Heading>
          <Text>
            ModeSens Concierge helps you shop 500+ stores in one place. A
            premium benefit exclusively reserved for Silver and above members.
            <Link href="#">Learn More</Link>
          </Text>
        </Stack>
        <Stack {...Style} justify="center" align={"center"}>
          <Text>Available exclusively for Silver and above members.</Text>
          <Link href="#">TRY SILVER</Link>
        </Stack>

        <Stack p={"20px"}>
          <HStack justify={"space-between"}>
            <Heading {...H3Style}>Subscribe To Alerts</Heading>
            <Button {...ButtonStyle}>SET ALERT</Button>
          </HStack>

          <Text>
            We'll keep our eyes out for you. Subscribe to receive automatic
            email and app updates to be the first to know when this item becomes
            available in new stores, sizes or prices.
          </Text>
          <Image src="https://modesens.com/banner/15067/getimg/?img=%2Fbanner%2F20230223-modesens-Mytheresa-1440x250-EN.jpg" />
        </Stack>

        <Stack p="20px">
          <Heading {...H3Style}>About {data.brand}</Heading>
          <Text>
            {data.brand} is essentially a mindset: slightly out of the schemes
            and subtly subversive. It’s an unpredictable visual language:
            graphic, rigorous, in which Consuelo Castiglioni, the Swiss-born
            designer, conveys her personal sense of elegance and experimental
            approach to materials and colors, her unique flair for mixing prints
            and shapes in collections that are at once irreverent and emotional,
            with an eclectic yet coherent design. Age and status are irrelevant
            to her: she encourages women to express themselves through clothes,
            mixing pieces from different seasons in endlessly new, utterly
            individual permutations.
          </Text>
        </Stack>
      </Flex>
    </Container>
  );
}

const data = {
  id: "2",
  detail_page_url: "/product/amiri-skel-top-sneakers-purple-63055686/",
  brand: "AMIRI",
  product_name: "Skel Top Sneakers In Purple",
  price: "$445 - $840",
  img: "https://cdn.modesens.com/availability/59167466?w=400",
  category: "male",
  all_img: [
    "https://cdn.modesens.com/availability/59167466?w=400",
    "https://cdn.danielloboutique.it/media/catalog/product/P/S/PS23MFS003-510_1_255195_1672974201.jpg",
    "https://image.s5a.com/is/image/saks/0400017933368_PURPLE?wid=972&hei=1296&fmt=jpeg",
    "https://media.bergdorfgoodman.com/f_auto,q_auto,b_auto,c_pad/01/bg_4440515_100436_m",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/fac437147fc17217351623a34dee4909.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/360dbb04d5ac7f3ab7ad3ec73fb571fc.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/7504897b06773f222b6345e1d3666f93.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/ba882e48550c0d9a6c5bf02ac1f44e76.jpg",
    "https://cdn.shopify.com/s/files/1/0266/7292/2698/products/010097401410_12.jpg?v=1669759260",
    "https://cdn.modesens.com/media/153965189?w=400",
    "https://cdn.modesens.com/media/153965190?w=400",
    "https://cdn.modesens.com/media/153965191?w=400",
    "https://cdn.modesens.com/media/153965192?w=400",
    "https://cdn.modesens.com/media/153965193?w=400",
    "https://cdn.modesens.com/media/153965194?w=400",
    "https://cdn.modesens.com/media/153965196?w=400",
    "https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/ab/P00734903.jpg",
    "https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/ab/P00734903_b2.jpg",
    "https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/ab/P00734903_d1.jpg",
    "https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/ab/P00734903_d2.jpg",
    "https://img.mytheresa.com/1000/1000/95/jpeg/catalog/product/ab/P00734903_d3.jpg",
    "https://media.neimanmarcus.com/f_auto,q_auto,b_auto,c_pad/w_1200,h_1500/01/nm_4440515_100436_m",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/e8a41af10b7b5c9453da09f3c5588cc5_b5ab7c4a-7581-47fc-a454-ba0ba2bb022f.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/2adb8e797d6f87360140df4352368f83_b27e3601-9861-4906-929f-a7e027138bfd.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/abe8ae7c64a61e9a798d860021f3fb19_2bc046a9-e3b3-4e57-b6a2-49a19034dc75.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/ca12a8ac2a92fe9d7e7e9db3900f8c40_3833fc31-6200-4af2-9b36-93af08060c7c.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/0aeff458df86dd11b009a8f23d7a8217_17e566db-8e8c-4596-aa61-dc28d7070b50.jpg",
    "https://cdn.shopify.com/s/files/1/0618/1476/7843/products/138310_1.jpg?v=1669894060",
    "https://cdn.shopify.com/s/files/1/0618/1476/7843/products/138310_4.jpg?v=1669894060",
    "https://cdn.shopify.com/s/files/1/0618/1476/7843/products/138310_2.jpg?v=1669894060",
    "https://cdn.shopify.com/s/files/1/0618/1476/7843/products/138310_3.jpg?v=1669894060",
    "https://cdn.shopify.com/s/files/1/0618/1476/7843/products/138310_5.jpg?v=1669894060",
    "https://dr89u07j3vi3h.cloudfront.net/i3CQzouaRq2LCgkgACeQJ5Kt",
    "https://cdn-images.farfetch-contents.com/19/34/60/42/19346042_42494537_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/34/60/42/19346042_42492951_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/34/60/42/19346042_42494556_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/34/60/42/19346042_42494562_1000.jpg",
    "https://img.brownsfashion.com/19/34/60/42/19346042_43842680_1000.jpg",
    "https://is4.fwrdassets.com/images/p/fw/p/AMIF-MZ162_V1.jpg",
    "https://is4.fwrdassets.com/images/p/fw/p/AMIF-MZ162_V2.jpg",
    "https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/54cc9567ac1fc459c2cd0a746c8610fb.jpg",
    "https://cdn.modesens.com/media/153096823?w=400",
    "https://cdn-images.farfetch-contents.com/19/47/64/01/19476401_43459668_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/47/64/01/19476401_43460042_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/47/64/01/19476401_43460044_1000.jpg",
    "https://cdn-images.farfetch-contents.com/19/47/64/01/19476401_43460043_1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/pr/w1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/ou/w1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/e1/w1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/fr/w1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/bk/w1000.jpg",
    "https://cache.mrporter.com/variants/images/1647597293118478/cu/w1000.jpg",
    "https://www.gebnegozionline.com/media/catalog/product/2/0/2000009954272_1.jpg",
    "https://www.gebnegozionline.com/media/catalog/product/2/0/2000009954272_2.jpg",
    "https://www.gebnegozionline.com/media/catalog/product/2/0/2000009954272_3.jpg",
    "https://www.gebnegozionline.com/media/catalog/product/2/0/2000009954272_4.jpg",
    "https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/5a771b6ea79b8562e3aee6b0c9bb22d0.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/0afcdeb780025c15140a99e55e2f3afc_b486b88b-df7f-44c6-8b52-abb165a6ca0c.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/6ab69d130b733ce92d6c9432968c449e_e254007e-5fb2-4a37-8320-3a9b70764613.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/7d60d16dd2e6be779fe6e5e0a057d7dc_e7d23539-5fca-4aea-8aa0-9f8034030e2b.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/73ac6b0a24aab7631ad13506a405c3e7_07e57559-011b-4a52-9193-47e887e48fc9.jpg",
    "https://cdn.shopify.com/s/files/1/0274/7695/1137/products/3446a235cf2c437122b0e127cb738e82_0427ef26-0e2c-46ee-9584-3faa62273bca.jpg",
    "https://d3hed5rtv63hp1.cloudfront.net/products-feed/727609/original/2000009284935_99.jpg?1672230642",
    "https://d3vfig6e0r0snz.cloudfront.net/rcYjnYuenaTH5vyDF/images/products/28e0eb86a70bfa6a254da525f2e3316a.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/f716175ac3c5b8a4c4d18e1c71a854c7.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/801025c6c28b440aa9f6a4ce4cc50e7a.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/9e02b3f4ae01fdd386bd6da7eb7655c0.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/4c00dbe6571544122d5ca4fefa4b63f0.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/252e7bae3f646281b4945f00f8565218.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/486e262bb9285886c59880e56759c41d.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/8fc1040f66965f6ea092c0cdcdd1d03b.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/6cafd19b1aebe5b484a9cf2ead9c8510.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/6d5dbf60ce49485aec5043ef82304a09.jpg",
    "https://cdn-images.italist.com/image/upload/t_zoom_v3_q_auto/a382c8833c5e9cfde0caf13f9bc79f82.jpg",
    "https://images.coltortiboutique.com/media/catalog/product/s/n/sneakers_amiri_misto_231876lsn000005-510-3.jpg",
    "https://images.coltortiboutique.com/media/catalog/product/s/n/sneakers_amiri_misto_231876lsn000005-510-4.jpg",
    "https://images.coltortiboutique.com/media/catalog/product/s/n/sneakers_amiri_misto_231876lsn000005-510-5.jpg",
    "https://images.coltortiboutique.com/media/catalog/product/s/n/sneakers_amiri_misto_231876lsn000005-510-6.jpg",
    "https://images.coltortiboutique.com/media/catalog/product/s/n/sneakers_amiri_misto_231876lsn000005-510-9.jpg",
  ],
};
