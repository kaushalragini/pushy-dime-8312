// import * as types from "./cart.types";

import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  EMPTY_CART,
  GET_CART,
  ITEM_EXIST,
  UPDATE_CART,
} from "./actionTypes";

const initialState = {
  CART: [],
  loading: false,
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CART: {
      return {
        ...state,
        CART: payload,
        loading: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        loading: false,
      };
    }
    case UPDATE_CART: {
      return {
        ...state,
      };
    }
    case DELETE_FROM_CART: {
      return {
        ...state,
      };
    }
    case EMPTY_CART: {
      return {
        ...state,
        CART: [],
      };
    }
    default:
      return state;
  }
};
