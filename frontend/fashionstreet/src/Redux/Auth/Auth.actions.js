import axios from "axios";
import { RESET_PRODUCTS } from "../AdminProducts/AdminProducts.types";
import { RESET_FEEDBACK } from "../Feedback/Feedback.types";
import { RESET_ORDERS } from "../OrderedProducts/OrderedProducts.types";
import { RESET_RATINGS } from "../Ratings/Ratings.types";
import { RESET_USERS } from "../Users/Users.types";
import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  GET_USER_DETAILS,
  RESET_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
} from "./Auth.types";

export const getUserDetails = () => (dispatch) => {
  let token = localStorage.getItem("token");
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL}/users`,
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      dispatch({ type: GET_USER_DETAILS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (payload, Toast, navigate) => (dispatch) => {
  fetch(`${process.env.REACT_APP_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      Toast(res?.msg, "success");
      if (res.token) {
        localStorage.setItem("token", res.token);
        dispatch({ type: USER_LOGIN, payload: res.token });
        navigate("/");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: USER_LOGOUT });
};

export const loginAdmin = (token) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN, payload: token });
};

export const logoutAdmin = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: ADMIN_LOGOUT });
};

export const resetUser = () => (dispatch) => {
  dispatch({ type: RESET_USERS });
  dispatch({ type: RESET_FEEDBACK });
  dispatch({ type: RESET_LOGIN });
  dispatch({ type: RESET_ORDERS });
  dispatch({ type: RESET_PRODUCTS });
  dispatch({ type: RESET_RATINGS });
};
