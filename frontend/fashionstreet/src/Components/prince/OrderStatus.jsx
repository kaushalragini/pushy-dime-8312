import { Button, Heading, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "../prince/OrderStatus.css";
import CompletedProcess from "./CompletedProcess";
import Feedback from "./Feedback";
import PendingProgress from "./PendingProgress";

const OrderStatus = () => {
  const [data, setData] = useState([]);
  // const {Toast} = useToast
  const token = localStorage.getItem("token");
  const toast = useToast()
  const deleteOrder = (id) => {
    console.log(id);
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL}orderedproducts/${id}`,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        getOrderProducts()
        toast({
          title: 'Product Deleted',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getOrderProducts();
    console.log(process.env.REACT_APP_URL);
  }, []);

  const getOrderProducts = () => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}orderedproducts`,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);
  return (
    <div className="order-main-box">
      <Heading textAlign={"center"} mb="30px">
        Order Details
      </Heading>
      <div >
      <Feedback/>
      </div>
      <div className="Order-main-table">
        <table>
          <thead>
            <tr style={{ backgroundColor: "black", color: "white" }}>
              <th style={{ padding: "20px" }}>Product</th>
              <th style={{ padding: "20px" }}>Name</th>
              <th style={{ padding: "20px" }}>Size</th>
              <th style={{ padding: "20px" }}>Price</th>
              <th style={{ padding: "20px" }}>Qty</th>
              <th style={{ padding: "20px" }}>Status</th>
              <th style={{ padding: "20px" }}>Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr>
                <td>
                  <img
                    style={{ width: "100px" }}
                    src={e.productsId.img}
                    alt={e.productsId.product_name}
                  />
                </td>
                <td style={{ padding: "20px" }}>
                  <Text>{e.productsId.product_name}</Text>
                </td>
                <td style={{ padding: "20px" }}>
                  <Text>{e.size}</Text>
                </td>
                <td style={{ padding: "20px" }}>
                  <Text>₹ {e.productsId.price}/-</Text>
                </td>
                <td style={{ padding: "20px" }}>
                  <Text>{e.quantity}</Text>
                </td>
                <td style={{ padding: "20px" }}>
                  {e.status === "pending" ? (
                    <PendingProgress />
                  ) : (
                    <CompletedProcess />
                  )}
                </td>
                <td style={{ padding: "20px" }}>
                  <Button
                    isDisabled={e.status === "delivered"}
                    bgColor="red.500"
                    className="button-order-status"
                    padding={"20px"}
                    borderRadius="20px"
                    onClick={() => deleteOrder(e._id)}
                  >
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderStatus;
