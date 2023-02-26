import { Button, Image, Skeleton, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import ProductModal from "../AdminProducts/ProductModal";
import "../AdminProducts/ProductsTable.css";
import OrderedProductsCard from "./OrderedProductsCard";

const OrderedProductsTable = ({
  orders,
  disableImg = false,
  modal = "More..",
  heading = [
    "Order Id",
    "Product Name",
    "Order From",
    "Size",
    "Quantity",
    "Status",
  ],
  requiredFields = [
    "_id",
    "product_name",
    "name",
    "size",
    "quantity",
    "status",
  ],
}) => {
  return (
    <Skeleton
      startColor="purple.100"
      endColor="purple.300"
      height="600px"
      isLoaded={orders?.length}
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
            {orders?.map((order, index) => {
              return (
                <tr className="table-row" key={order?._id}>
                  {disableImg ? (
                    ""
                  ) : (
                    <td data-label="Image">
                      <Image
                        w="30px"
                        src={order?.productsId?.img}
                        alt={order?.productsId?.img}
                      />
                    </td>
                  )}
                  {heading.map((el, i) => {
                    return (
                      <td data-label={el} key={el}>
                        {el === "Product Name" ? (
                          order?.productsId?.product_name
                        ) : el === "Order From" ? (
                          order?.userId?.name
                        ) : el === "Status" ? (
                          <ProductModal
                            title={"Check Order Status"}
                            btnText={"Check"}
                          >
                            <OrderedProductsCard order={order} />
                          </ProductModal>
                        ) : (
                          order[requiredFields[i]]
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

export default OrderedProductsTable;
