// import * as types from "./cart.types";

import {
  ADD_CART_LOADING,
  ADD_TO_CART,
  CART_LOADING,
  DELETE_FROM_CART,
  EMPTY_CART,
  GET_CART,
  UPDATE_CART,
} from "./actionTypes";

const initialState = {
  CART: [],
  loading: false,
  addCartloading: false,
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_CART_LOADING: {
      return {
        ...state,
        addCartloading: true,
      };
    }
    case GET_CART: {
      return {
        ...state,
        CART: payload,
        loading: false,
        addCartloading: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
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
        loading: false,
      };
    }
    default:
      return state;
  }
};
