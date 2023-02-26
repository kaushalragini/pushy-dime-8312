import axios from "axios";
import {
  DELETE_USERS,
  ERROR_USERS,
  GET_ALL_USERS,
  LOADING_USERS,
  UPDATE_USERS,
} from "./Users.types";

//* GET
export const getUsers = (Toast, disableToast) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_USERS });
  axios({
    method: "get",
    url: `${process.env.REACT_APP_URL}/users/all`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_USERS, payload: res?.data?.data });
      if (!disableToast) {
        Toast("Here's All the Users", "success");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_USERS });
      console.error(err);
    });
};

//* UPDATE
export const updateUsers = (data, Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_USERS });
  axios({
    method: "patch",
    url: `${process.env.REACT_APP_URL}/users/${id}`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_USERS });
      dispatch(getUsers(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_USERS });
      console.error(err);
    });
};

//*DELETE
export const deleteUsers = (Toast, id) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_USERS });
  axios({
    method: "delete",
    url: `${process.env.REACT_APP_URL}/users/${id}`,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_USERS });
      dispatch(getUsers(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_USERS });
      console.error(err);
    });
};
