import { Box, Button, Flex, Image, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import "./ProductCard.css";
import axios from "axios";
//* Css

const ProductCard = ({ product }) => {
  const [update, setUpdate] = useState(false);
  const [prodData, setProdData] = useState({});
  const toast = useToast();

  const updateData = async () => {
    console.log(prodData);
    let token = localStorage.getItem("token");

    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/products`, {
        method: "post",
        data: JSON.stringify(),
        headers: {
          Authorization: `${token}`,
        },
      });
    } catch (err) {
      toast({
        title: `${err?.response?.data?.msg}`,
        status: "error",
        position: "top",
        isClosable: true,
      });
      console.error(err);
    }
  };
  setUpdate(false);

  return (
    <div>
      <Box h="50px">
        <Flex w="100%" justifyContent="end">
          <Box mr="15px">
            <Button
              onClick={() => {
                if (update) {
                  updateData();
                } else {
                  setUpdate(true);
                }
              }}
              colorScheme="purple"
            >
              Update
            </Button>
          </Box>
          <Box>
            <Button colorScheme="red">Delete</Button>
          </Box>
        </Flex>
      </Box>
      <Flex
        className="border"
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box>
          <Image src={product.img} alt={product.img} />
        </Box>
        <Box className="border">
          <Input
            placeholder="Brand Name"
            value={update ? prodData.brand : product.brand}
            onChange={(e) =>
              setProdData({ ...prodData, brand: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Category"
            value={update ? prodData.category : product.category}
            onChange={(e) =>
              setProdData({ ...prodData, category: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Description"
            value={update ? prodData.description : product.description}
            onChange={(e) =>
              setProdData({ ...prodData, description: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Designer"
            value={update ? prodData.designer : product.designer}
            onChange={(e) =>
              setProdData({ ...prodData, designer: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Gender"
            value={update ? prodData.gender : product.gender}
            onChange={(e) =>
              setProdData({ ...prodData, gender: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Home"
            value={update ? prodData.home : product.home}
            onChange={(e) => setProdData({ ...prodData, home: e.target.value })}
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Image"
            value={update ? prodData.img : product.img}
            onChange={(e) => setProdData({ ...prodData, img: e.target.value })}
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Mrp Price"
            value={update ? prodData.mrp : product.mrp}
            onChange={(e) =>
              setProdData({ ...prodData, mrp: Number(e.target.value) })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="number"
          />
          <Input
            placeholder="Product Number"
            value={update ? prodData.number : product.number}
            onChange={(e) =>
              setProdData({ ...prodData, number: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Original Price"
            value={update ? prodData.price : product.price}
            onChange={(e) =>
              setProdData({ ...prodData, price: Number(e.target.value) })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="number"
          />
          <Input
            placeholder="Product Name"
            value={update ? prodData.product_name : product.product_name}
            onChange={(e) =>
              setProdData({ ...prodData, product_name: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Rating"
            value={update ? prodData.rating : product.rating}
            onChange={(e) =>
              setProdData({ ...prodData, rating: +e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="number"
          />
          <Input
            placeholder="Sub category"
            value={update ? prodData["sub-category"] : product["sub-category"]}
            onChange={(e) =>
              setProdData({ ...prodData, ["sub-category"]: e.target.value })
            }
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
          <Input
            placeholder="Product Type"
            value={update ? prodData.type : product.type}
            onChange={(e) => setProdData({ ...prodData, type: e.target.value })}
            disabled={!update}
            className={update ? "enable" : "dis"}
            type="text"
          />
        </Box>
      </Flex>
    </div>
  );
};

export default ProductCard;

// brand: "",
//     category: "",
//     description: "",
//     designer: "",
//     detail_page_url: "",
//     gender: "",
//     home: "",
//     img: "",
//     mrp: 0,
//     number: "",
//     price: 0,
//     product_name: "",
//     rating: 0,
//     "sub-category": "",
//     type: "",
