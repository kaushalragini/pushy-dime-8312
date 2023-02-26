import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  Skeleton,
  Stack,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useToastCompo from "../../../CustomHook/useToast";
import { deleteUsers, updateUsers } from "../../../Redux/Users/Users.actions";
import "../AdminProducts/ProductCard.css";

const UserCard = ({ user }) => {
  const [update, setUpdate] = useState(false);
  const [userData, setuserData] = useState({});
  const dispatch = useDispatch();
  const { Toast } = useToastCompo();
  const { loading } = useSelector((state) => state.usersManager);

  const updateData = () => {
    dispatch(updateUsers(userData, Toast, user._id));
    setUpdate(false);
    console.log(userData);
  };

  const deleteData = () => {
    dispatch(deleteUsers(Toast, user._id));
  };

  if (loading)
    return (
      <Stack>
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
        <Skeleton
          height="40px"
          w="100%"
          startColor="purple.100"
          endColor="purple.400"
        />
      </Stack>
    );

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
            src={user?.avatar_url}
            alt={user?.avatar_url}
          />
        </Box>
        <Box>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              User Name
            </InputLeftAddon>
            <Input
              placeholder="User Name"
              value={update ? userData.name : user?.name}
              onChange={(e) =>
                setuserData({ ...userData, name: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              User Email
            </InputLeftAddon>
            <Input
              placeholder="User Email"
              value={update ? userData.email : user?.email}
              onChange={(e) =>
                setuserData({ ...userData, email: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              Address
            </InputLeftAddon>
            <Input
              placeholder="Address"
              value={update ? userData.address : user?.address}
              onChange={(e) =>
                setuserData({ ...userData, address: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              PinCode
            </InputLeftAddon>
            <Input
              placeholder="Pincode"
              value={update ? userData.pincode : user?.pincode}
              onChange={(e) =>
                setuserData({ ...userData, pincode: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              Admin Access
            </InputLeftAddon>
            <Input
              placeholder="Admin Access"
              value={update ? userData.is_admin : user?.is_admin ? "Yes" : "No"}
              onChange={(e) =>
                setuserData({ ...userData, is_admin: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              Date of Birth
            </InputLeftAddon>
            <Input
              placeholder="Date of Birth"
              value={update ? userData.dob : user?.dob}
              onChange={(e) =>
                setuserData({ ...userData, dob: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              Gender
            </InputLeftAddon>
            <Input
              placeholder="Gender"
              value={update ? userData.gender : user?.gender}
              onChange={(e) =>
                setuserData({ ...userData, gender: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              User Age
            </InputLeftAddon>
            <Input
              placeholder="Age"
              value={update ? userData.age : user?.age}
              onChange={(e) =>
                setuserData({ ...userData, age: Number(e.target.value) })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="number"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              Company Name
            </InputLeftAddon>
            <Input
              placeholder="Company Name"
              value={update ? userData.Company_Name : user?.Company_Name}
              onChange={(e) =>
                setuserData({ ...userData, Company_Name: e.target.value })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="text"
            />
          </InputGroup>
          <InputGroup>
            <InputLeftAddon bgColor="purple.500" color="#fff" w="150px">
              GST Number
            </InputLeftAddon>
            <Input
              placeholder="Gst Number"
              value={update ? userData.gst_No : user?.gst_No}
              onChange={(e) =>
                setuserData({ ...userData, gst_No: Number(e.target.value) })
              }
              disabled={!update}
              className={update ? "enable" : "dis"}
              type="number"
            />
          </InputGroup>
        </Box>
      </Flex>
    </div>
  );
};

export default UserCard;
