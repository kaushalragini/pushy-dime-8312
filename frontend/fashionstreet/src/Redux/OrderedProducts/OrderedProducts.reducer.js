import {
  ADD_ORDERS,
  DELETE_ORDERS,
  ERROR_ORDERS,
  GET_ALL_ORDERS,
  LOADING_ORDERS,
  RESET_ORDERS,
  UPDATE_ORDERS,
} from "./OrderedProducts.types";

const initialState = {
  orders: [],
  loading: false,
  error: false,
};

export const orderedProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ORDERS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_ORDERS: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_ALL_ORDERS: {
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: false,
      };
    }
    case UPDATE_ORDERS:
    case DELETE_ORDERS: {
      return { ...state };
    }
    case RESET_ORDERS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
