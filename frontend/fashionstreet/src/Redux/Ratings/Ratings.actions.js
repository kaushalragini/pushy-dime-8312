import axios from "axios";
import {
  ADD_RATINGS,
  DELETE_RATINGS,
  ERROR_RATINGS,
  GET_ALL_RATINGS,
  LOADING_RATINGS,
  UPDATE_RATINGS,
} from "./Ratings.types";

//* GET
export const getRatings = (Toast, disableToast, id) => (dispatch) => {
  console.log(id);
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_RATINGS });
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL}/product/ratings?productsId=${id}&embed=users`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_RATINGS, payload: res?.data?.data });
      if (!disableToast) {
        Toast("Here's All the Ratings", "success");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_RATINGS });
      console.error(err);
    });
};

//* UPDATE
export const updateRatings = (data, Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_RATINGS });
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_URL}/product/ratings/${id}`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_RATINGS });
      dispatch(getRatings(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_RATINGS });
      console.error(err);
    });
};

//*DELETE
export const deleteRatings = (Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_RATINGS });
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_URL}/product/ratings/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_RATINGS });
      dispatch(getRatings(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_RATINGS });
      console.error(err);
    });
};

//* ADD PRODUCT
export const addRatings = (data, Toast) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_RATINGS });
  axios({
    method: "post",
    url: `${process.env.REACT_APP_URL}/product/ratings`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_RATINGS });
      dispatch(getRatings(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_RATINGS });
      console.error(err);
    });
};
