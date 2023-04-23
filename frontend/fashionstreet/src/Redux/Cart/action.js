import axios from "axios";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  EMPTY_CART,
  GET_CART,
  UPDATE_CART,
} from "./actionTypes";
const baseURL = process.env.REACT_APP_URL;

export const get_cart = () => async (dispatch) => {
  let token = localStorage.getItem("token");
  let res = await axios.get(`${baseURL}/cart`, {
    headers: {
      Authorization: token,
    },
  });
  // console.log(res.data.data);
  dispatch({ type: GET_CART, payload: res.data.data });
};

export const add_to_cart = (product, Toast) => async (dispatch) => {
  let token = localStorage.getItem("token");
  try {
    let res = await axios.post(`${baseURL}/cart`, product, {
      headers: {
        Authorization: token,
      },
    });
    // console.log(res);
    dispatch(get_cart());
    Toast(res.data.msg, "success");
    // dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const update_cart = (id, quantity, Toast) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let res = await axios.patch(
    `${baseURL}/cart/${id}`,
    { quantity },
    {
      headers: {
        Authorization: token,
      },
    }
  );
  dispatch(get_cart());
  Toast("Product Quantity Updated", "success");
};

export const delete_from_cart = (id, Toast) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let res = await axios.delete(`${baseURL}/cart/${id}`, {
    headers: {
      Authorization: token,
    },
  });
  dispatch(get_cart());
  Toast(res.data.msg, "success");
};

export const empty_cart = () => async (dispatch) => {
  dispatch({ type: EMPTY_CART });
};
