import { HStack, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Pagination({ handlePage, page }) {
  const handleOnclick = (val) => {
    handlePage(page + val);
  };

  const totalPageCount = Math.ceil(50 / 24);

  return (
    <HStack gap={"20px"} justify={"center"} fontSize="20px" p="10px">
      <button onClick={() => handleOnclick(-1)} disabled={page === 1}>
        {"<<"}
      </button>
      <button>{page - 1}</button>
      <Text fontWeight={"bold"}>{page}</Text>
      <button>{page + 1}</button>
      <button
        onClick={() => handleOnclick(+1)}
        disabled={page === totalPageCount}
      >
        {">>"}
      </button>
    </HStack>
  );
}
