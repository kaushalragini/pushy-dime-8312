// import * as types from "./product.types";

import { GET_PRODUCTS } from "./actionTypes";

const initialState = {
  PRODUCTS: [],
  params: {},
};

export const ProductReducer = (
  state = initialState,
  { type, payload, params }
) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: payload,
        params,
      };
    }
    default:
      return state;
  }
};
