import axios from "axios";
import {
  ADMIN_STATS_LOADING,
  GET_CART_PERCENTAGE,
  GET_CHECKOUT_PERCENTAGE,
  GET_CONVERSION_RATE,
  GET_TOTAL_REVENUE,
} from "./AdminStats.types";

export const getAdminStats = () => async (dispatch) => {
  let token = localStorage.getItem("token");

  dispatch({
    type: ADMIN_STATS_LOADING,
  });

  try {
    const productResponse = await axios.get(
      `${process.env.REACT_APP_URL}/products/all`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    const products = await productResponse;

    const cartResponse = await axios.get(
      `${process.env.REACT_APP_URL}/cart/all`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    const cart = await cartResponse;

    dispatch({
      type: GET_CART_PERCENTAGE,
      payload: +((cart.data.count / products.data.count) * 100).toFixed(2),
    });

    dispatch(getCheckoutPercentage(cart, products));
  } catch (err) {
    console.log("err:", err);
  }
};

export const getCheckoutPercentage = (cart, products) => async (dispatch) => {
  let token = localStorage.getItem("token");

  const checkoutResponse = await axios.get(
    `${process.env.REACT_APP_URL}/orderedproducts/all`,
    {
      headers: {
        Authorization: token,
      },
    }
  );

  const checkout = await checkoutResponse;

  dispatch(getTotalRevenue(checkout.data.data));

  dispatch({
    type: GET_CONVERSION_RATE,
    payload: +((checkout.data.count / products.data.count) * 100).toFixed(2),
  });
  dispatch({
    type: GET_CHECKOUT_PERCENTAGE,
    payload: +((cart.data.count / checkout.data.count) * 100).toFixed(2),
  });
};

const getTotalRevenue = (checkout) => (dispatch) => {
  const totalRevenue = checkout.reduce((acc, el) => {
    return acc + el.quantity * el.productsId.price;
  }, 0);

  dispatch({
    type: GET_TOTAL_REVENUE,
    payload: totalRevenue,
  });
};
