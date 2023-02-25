import axios from "axios";
import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  ERROR_PRODUCTS,
  GET_ALL_PRODUCTS,
  LOADING_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./AdminProducts.types";

//* GET
export const getProducts = (Toast, disableToast) => (dispatch) => {
  dispatch({ type: LOADING_PRODUCTS });
  axios
    .get(`${process.env.REACT_APP_URL}/products/all`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_PRODUCTS, payload: res?.data?.data });
      if (!disableToast) {
        Toast("Here's All the Products", "success");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_PRODUCTS });
      console.error(err);
    });
};

//* UPDATE
export const updateProducts = (data, Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_PRODUCTS });
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_URL}/products/${id}`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_PRODUCTS });
      dispatch(getProducts(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_PRODUCTS });
      console.error(err);
    });
};

//*DELETE
export const deleteProducts = (Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_PRODUCTS });
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_URL}/products/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_PRODUCTS });
      dispatch(getProducts(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_PRODUCTS });
      console.error(err);
    });
};

//* ADD PRODUCT
export const addProducts = (data, Toast) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_PRODUCTS });
  axios({
    method: "post",
    url: `${process.env.REACT_APP_URL}/products`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_PRODUCTS });
      dispatch(getProducts(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_PRODUCTS });
      console.error(err);
    });
};
