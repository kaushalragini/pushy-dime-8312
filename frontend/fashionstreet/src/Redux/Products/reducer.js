// import * as types from "./product.types";

import {
  FILTER_PRODUCTS,
  GET_PRODUCTS,
  PAGINATE_PRODUCTS,
  SORT_PRODUCTS,
} from "./actionTypes";

const initialState = {
  PRODUCTS: [],
};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: payload,
      };
    }
    case FILTER_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: payload,
      };
    }
    case SORT_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: payload,
      };
    }
    case PAGINATE_PRODUCTS: {
      return {
        ...state,
        PRODUCTS: payload,
      };
    }
    default:
      return state;
  }
};
