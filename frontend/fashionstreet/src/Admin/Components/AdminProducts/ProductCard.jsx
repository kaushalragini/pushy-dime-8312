import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProducts,
  updateProducts,
} from "../../../Redux/AdminProducts/AdminProducts.actions";
import useToastCompo from "../../../CustomHook/useToast";
import ProductsRating from "./ProductsRating";
//* Css

const ProductCard = ({ product }) => {
  const [update, setUpdate] = useState(false);
  const [prodData, setProdData] = useState({});
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  const updateData = () => {
    dispatch(updateProducts(prodData, Toast, product._id));
    setUpdate(false);
  };

  const deleteData = () => {
    dispatch(deleteProducts(Toast, product._id));
  };

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
            <Button onClick={deleteData} colorScheme="red">
              Delete
            </Button>
          </Box>
        </Flex>
      </Box>
      <Flex
        flexDirection={{ lg: "row", md: "row", sm: "column", base: "column" }}
      >
        <Box>
          <Image
            border="1px"
            borderColor="gray.200"
            src={product.img}
            alt={product.img}
          />
        </Box>
        <Box>
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
        <Box
          padding="10px"
          border="1px"
          borderColor="gray.200"
          w={{ lg: "100%", md: "100%", sm: "100%", base: "100%" }}
        >
          <ProductsRating product={product} />
        </Box>
      </Flex>
    </div>
  );
};

export default ProductCard;
