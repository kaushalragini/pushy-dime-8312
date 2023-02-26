import {
  Button,
  Heading,
  Input,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { updateUsers } from "../../../Redux/Users/Users.actions";
import { ButtonStyle } from "../nikhil.css";

const initialData = {
  address: "",
  pincode: "",
};

export default function Address() {
  const [inputData, setInputData] = useState(initialData);
  const {Toast} = useToastCompo();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(updateUsers(inputData, Toast, ));
    setInputData(inputData);
  };

  return (
    <Stack w="300px">
      <Text fontWeight={"bold"}>1. ADDRESS</Text>
      <p>Address</p>
      <Input onChange={handleChange} name="address" value={inputData.address} />
      <p>Pin Code</p>
      <Input
        onChange={handleChange}
        name="pincode"
        value={inputData.pincode}
        type="number"
      />
      {/* <p>State</p>
      <Input onChange={handleChange} name="state" value={inputData.state} />
      <br /> */}
      <Button {...ButtonStyle} onClick={handleSubmit}>
        SUBMIT
      </Button>
    </Stack>
  );
}
