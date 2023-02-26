import { Box, Button, Center, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { addProducts } from "../../../Redux/AdminProducts/AdminProducts.actions";

const initialData = {
  brand: "",
  category: "",
  description: "",
  designer: "",
  detail_page_url: "",
  gender: "",
  home: "",
  img: "",
  mrp: "",
  number: "",
  price: "",
  product_name: "",
  rating: "",
  "sub-category": "",
  type: "",
};

const AddProductForm = () => {
  const [prodData, setProdData] = useState(initialData);
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();

  const addData = () => {
    console.log(prodData);
    dispatch(addProducts(prodData, Toast));
    setProdData(initialData);
  };
  return (
    <div>
      <Box>
        <Input
          placeholder="Brand Name"
          value={prodData.brand}
          onChange={(e) => setProdData({ ...prodData, brand: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Category"
          value={prodData.category}
          onChange={(e) =>
            setProdData({ ...prodData, category: e.target.value })
          }
          type="text"
        />
        <Input
          placeholder="Description"
          value={prodData.description}
          onChange={(e) =>
            setProdData({ ...prodData, description: e.target.value })
          }
          type="text"
        />
        <Input
          placeholder="Designer"
          value={prodData.designer}
          onChange={(e) =>
            setProdData({ ...prodData, designer: e.target.value })
          }
          type="text"
        />
        <Input
          placeholder="Gender"
          value={prodData.gender}
          onChange={(e) => setProdData({ ...prodData, gender: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Home"
          value={prodData.home}
          onChange={(e) => setProdData({ ...prodData, home: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Image"
          value={prodData.img}
          onChange={(e) => setProdData({ ...prodData, img: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Mrp Price"
          value={prodData.mrp}
          onChange={(e) =>
            setProdData({ ...prodData, mrp: Number(e.target.value) })
          }
          type="number"
        />
        <Input
          placeholder="Product Number"
          value={prodData.number}
          onChange={(e) => setProdData({ ...prodData, number: e.target.value })}
          type="text"
        />
        <Input
          placeholder="Original Price"
          value={prodData.price}
          onChange={(e) =>
            setProdData({ ...prodData, price: Number(e.target.value) })
          }
          type="number"
        />
        <Input
          placeholder="Product Name"
          value={prodData.product_name}
          onChange={(e) =>
            setProdData({ ...prodData, product_name: e.target.value })
          }
          type="text"
        />
        <Input
          placeholder="Rating"
          value={prodData.rating}
          onChange={(e) =>
            setProdData({ ...prodData, rating: +e.target.value })
          }
          type="number"
        />
        <Input
          placeholder="Sub category"
          value={prodData["sub-category"]}
          onChange={(e) =>
            setProdData({ ...prodData, ["sub-category"]: e.target.value })
          }
          type="text"
        />
        <Input
          placeholder="Product Type"
          value={prodData.type}
          onChange={(e) => setProdData({ ...prodData, type: e.target.value })}
          type="text"
        />
        <Center mt="20px">
          <Button onClick={addData} colorScheme="purple" variant="outline">
            Add Product
          </Button>
        </Center>
      </Box>
    </div>
  );
};

export default AddProductForm;
