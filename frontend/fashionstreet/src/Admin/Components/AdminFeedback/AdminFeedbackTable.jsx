import { Button, Image, Skeleton, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import ProductModal from "../AdminProducts/ProductModal";
import "../AdminProducts/ProductsTable.css";

const AdminFeedbackTable = ({
  feedback,
  disableImg = true,
  modal = "More..",
  heading = ["Feedback Id", "User Name", "User Email", "Feedback"],
  requiredFields = ["_id", "name", "email", "feedBack"],
}) => {
  return (
    <Skeleton
      startColor="purple.100"
      endColor="purple.300"
      height="600px"
      isLoaded={feedback?.length}
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
            {feedback?.map((order, index) => {
              return (
                <tr className="table-row" key={order?._id}>
                  {disableImg ? (
                    ""
                  ) : (
                    <td data-label="Image"></td>
                    //* handles data based upon the products Table heading
                  )}
                  {heading.map((el, i) => {
                    return (
                      <td data-label={el} key={el}>
                        {el === "User Name"
                          ? order?.userId?.name
                          : el === "User Email"
                          ? order?.userId?.email
                          : el === "Feedback Id"
                          ? `#${order?._id}`
                          : order[requiredFields[i]]}
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

export default AdminFeedbackTable;
