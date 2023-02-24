import { GET_ALL_PRODUCTS } from "./AdminProducts.types";

const initialState = {
  products: [],
  loading: false,
  error: false,
};

export const AdminProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};
