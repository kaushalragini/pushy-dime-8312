import axios from "axios";
import { RESET_PRODUCTS } from "../AdminProducts/AdminProducts.types";
import { RESET_FEEDBACK } from "../Feedback/Feedback.types";
import { RESET_ORDERS } from "../OrderedProducts/OrderedProducts.types";
import { RESET_RATINGS } from "../Ratings/Ratings.types";
import { RESET_USERS } from "../Users/Users.types";
import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  RESET_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
} from "./Auth.types";

export const getUserDetails = () => (dispatch) => {
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL}/users`,
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

export const loginUser = (token) => (dispatch) => {
  dispatch({ type: USER_LOGIN, payload: token });
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
