import axios from "axios";
import { FILTER_PRODUCTS, GET_PRODUCTS, SORT_PRODUCTS } from "./actionTypes";

const baseURL = process.env.REACT_APP_URL;

export const get_products =
  ({ page, brand, q, sort, min, max }) =>
  async (dispatch) => {
    let res = await axios({
      method: "GET",
      baseURL,
      url: `products/all`,
      params: {
        page,
        brand,
        q,
        sort,
        price_gte: min,
        price_lte: max,
        limit: 8,
      },
    });
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data.data,
      params: { page, brand, q, sort, min, max },
    });
  };

export const get_single_product = (id) => async (dispatch) => {
  let token = localStorage.getItem("token");
  let res = await axios({
    method: "GET",
    baseURL,
    url: `products/${id}`,
    headers: {
      Authorization: token,
    },
  });
  dispatch({
    type: GET_PRODUCTS,
    payload: [res.data],
    params: {},
  });
};
