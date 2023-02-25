import axios from "axios";
import {
  DELETE_ORDERS,
  ERROR_ORDERS,
  GET_ALL_ORDERS,
  LOADING_ORDERS,
  UPDATE_ORDERS,
} from "./OrderedProducts.types";

//* GET
export const getOrders = (Toast, disableToast) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_ORDERS });
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL}/orderedproducts/all`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_ORDERS, payload: res?.data?.data });
      if (!disableToast) {
        Toast("Here's All the Orders", "success");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_ORDERS });
      console.error(err);
    });
};

//* UPDATE
export const updateOrders = (data, Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_ORDERS });
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_URL}/orderedproducts/${id}`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_ORDERS });
      dispatch(getOrders(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_ORDERS });
      console.error(err);
    });
};

//*DELETE
export const deleteOrders = (Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_ORDERS });
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_URL}/orderedproducts/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_ORDERS });
      dispatch(getOrders(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_ORDERS });
      console.error(err);
    });
};
