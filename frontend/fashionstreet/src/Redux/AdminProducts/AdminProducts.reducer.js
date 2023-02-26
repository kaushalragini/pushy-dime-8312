import {
  ADD_PRODUCTS,
  DELETE_PRODUCTS,
  ERROR_PRODUCTS,
  GET_ALL_PRODUCTS,
  LOADING_PRODUCTS,
  RESET_PRODUCTS,
  UPDATE_PRODUCTS,
} from "./AdminProducts.types";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const adminProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_PRODUCTS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_PRODUCTS: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
        loading: false,
        error: false,
      };
    }
    case ADD_PRODUCTS:
    case UPDATE_PRODUCTS:
    case DELETE_PRODUCTS: {
      return { ...state };
    }
    case RESET_PRODUCTS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
