import { Button, Heading, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { empty_cart } from "../../../Redux/Cart/action";
import { ButtonStyle } from "../nikhil.css";

const initialData = {
  name: "",
  number: "",
  cvv: "",
};

export default function Address() {
  const [inputData, setInputData] = useState(initialData);
  const { Toast } = useToastCompo();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/orderedproducts`,
      headers: {
        Authorization: `${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        axios({
          method: "delete",
          url: `${process.env.REACT_APP_URL}/cart/user/empty`,
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        })
          .then((res) => {
            Toast("Payment Successful", "success");
            setInputData(initialData);
            dispatch(empty_cart());
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>1. Payment (by debit card)</Text>
      <p>Card Holders Name</p>
      <Input onChange={handleChange} name="name" value={inputData.name} />
      <p>Card Number</p>
      <Input
        onChange={handleChange}
        name="number"
        type="password"
        value={inputData.number}
        maxLength="12"
        minLength="12"
      />
      <p>CVV</p>
      <Input
        onChange={handleChange}
        name="cvv"
        type="password"
        value={inputData.cvv}
        w="100px"
        maxLength="3"
        minLength="3"
      />
      <br />
      <Button {...ButtonStyle} onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Stack>
  );
}
