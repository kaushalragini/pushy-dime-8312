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
      let updated = state.CART.map((el) => {
        if (el.id === payload.id) {
          return payload;
        }
        return el;
      });
      return {
        ...state,
        CART: updated,
      };
    }
    case DELETE_FROM_CART: {
      let filtered = state.CART.filter((el) => el._id !== payload);
      return {
        ...state,
        CART: filtered,
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
