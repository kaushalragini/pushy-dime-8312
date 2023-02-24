import { Skeleton } from "@chakra-ui/react";
import React from "react";

const TableSkeleTon = ({ count = 20 }) => {
  return (
    <div>
      <Skeleton
        borderWidth="3px"
        borderColor="blue"
        bgColor="red"
        height="20px"
      />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      <Skeleton borderWidth="3px" borderColor="blue" height="20px" />
      {/* {[...new Array(count)].map((el) => {
        return <Skeleton borderWidth="3px" borderColor="blue" height="20px" />;
      })} */}
    </div>
  );
};

export default TableSkeleTon;
