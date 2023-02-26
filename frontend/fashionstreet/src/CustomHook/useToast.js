import { useToast } from "@chakra-ui/react";
import React from "react";

const useToastCompo = () => {
  const toast = useToast();
  const Toast = (message, status) => {
    toast({
      title: `${message}`,
      position: "top",
      variant: "left-accent",
      isClosable: true,
      status,
    });
  };
  return { Toast };
};

export default useToastCompo;
