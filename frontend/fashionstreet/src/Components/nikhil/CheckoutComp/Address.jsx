import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { updateUsers } from "../../../Redux/Users/Users.actions";
import { ButtonStyle } from "../nikhil.css";
import { getUserDetails } from "../../../Redux/Auth/Auth.actions";

const initialData = {
  address: "",
  pincode: "",
};

export default function Address({ setCheckAddress }) {
  const [inputData, setInputData] = useState(initialData);
  const { userData } = useSelector((state) => state.authManager);
  const { Toast } = useToastCompo();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUsers(inputData, Toast, userData._id, "Address Added"));
    setCheckAddress(false);
    setInputData(initialData);
  };

  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>1. ADDRESS</Text>
      <p>Address</p>
      <Input
        placeholder="Enter Your Delivery Address"
        onChange={handleChange}
        name="address"
        value={inputData.address}
      />
      <p>Pin Code</p>
      <Input
        placeholder="Enter Your Pincode"
        onChange={handleChange}
        name="pincode"
        value={inputData.pincode}
        type="number"
      />
      {/* <p>State</p>
      <Input onChange={handleChange} name="state" value={inputData.state} />
      <br /> */}
      <Button {...ButtonStyle} onClick={handleSubmit}>
        ADD
      </Button>
    </Stack>
  );
}
