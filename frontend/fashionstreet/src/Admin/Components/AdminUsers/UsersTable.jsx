import { Button, Image, Skeleton, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import ProductCard from "../AdminProducts/ProductCard";
import ProductModal from "../AdminProducts/ProductModal";

import "../AdminProducts/ProductsTable.css";
import UserCard from "./UserCard";

const UserssTable = ({
  users,
  disableImg = false,
  modal = "More..",
  heading = ["Name", "Email", "Address", "Gender", "More.."],
  requiredFields = ["name", "email", "address", "gender", "More"],
}) => {
  return (
    <Skeleton
      startColor="purple.100"
      endColor="purple.300"
      height="600px"
      isLoaded={users?.length}
    >
      <div>
        {" "}
        <table className="table">
          <thead>
            <tr>
              {disableImg ? "" : <th>Image</th>}
              {heading?.map((el) => {
                return <th key={el}>{el}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {/* //* mapping to get */}
            {users?.map((user, index) => {
              return (
                <tr className="table-row" key={user._id}>
                  {disableImg ? (
                    ""
                  ) : (
                    <td data-label="Image">
                      <Image w="30px" src={user.img} alt={user.img} />
                    </td>
                  )}
                  {heading.map((el, i) => {
                    return (
                      <td data-label={el} key={el}>
                        {el === "Price" ? "₹ " : ""}
                        {users[index][requiredFields[i]] ||
                        requiredFields[i] !== "More" ? (
                          users[index][requiredFields[i]]
                        ) : (
                          <>
                            <ProductModal title={"User Details"} size={"lg"}>
                              <UserCard user={user} />
                            </ProductModal>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Skeleton>
  );
};

export default UserssTable;
