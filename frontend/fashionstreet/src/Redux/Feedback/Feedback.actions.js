import axios from "axios";
import {
  ADD_FEEDBACK,
  ERROR_FEEDBACK,
  GET_ALL_FEEDBACK,
  LOADING_FEEDBACK,
} from "./Feedback.types";

//* GET
export const getFeedback = (Toast, disableToast) => (dispatch) => {
  dispatch({ type: LOADING_FEEDBACK });
  axios
    .get(`${process.env.REACT_APP_URL}/user/feedback`)
    .then((res) => {
      console.log(res);
      dispatch({ type: GET_ALL_FEEDBACK, payload: res?.data?.data });
      if (!disableToast) {
        Toast("Here's All the Feedbacks", "success");
      }
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_FEEDBACK });
      console.error(err);
    });
};

//* ADD PRODUCT
export const addRatings = (data, Toast) => (dispatch) => {
  let token = localStorage.getItem("token");
  dispatch({ type: LOADING_FEEDBACK });
  axios({
    method: "post",
    url: `${process.env.REACT_APP_URL}/user/feedback`,
    data: data,
    headers: {
      Authorization: `${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      dispatch({ type: ADD_FEEDBACK });
      dispatch(getFeedback(Toast, true));
      Toast(res?.data?.msg, "success");
    })
    .catch((err) => {
      Toast(err?.response?.data?.msg, "error");
      dispatch({ type: ERROR_FEEDBACK });
      console.error(err);
    });
};
