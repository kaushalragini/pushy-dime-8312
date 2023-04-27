import {
  ADMIN_STATS_LOADING,
  GET_CART_PERCENTAGE,
  GET_CHECKOUT_PERCENTAGE,
  GET_CONVERSION_RATE,
  GET_TOTAL_REVENUE,
} from "./AdminStats.types";

const initialState = {
  totalProducts: 0,
  cartPercentage: 0,
  checkoutPercentage: 0,
  totalRevenue: 0,
  conversionRate: 0,
  loading: false,
};

export const AdminStatsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_STATS_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_CART_PERCENTAGE: {
      return {
        ...state,
        cartPercentage: +payload,
      };
    }
    case GET_CHECKOUT_PERCENTAGE: {
      return {
        ...state,
        checkoutPercentage: payload,
      };
    }
    case GET_TOTAL_REVENUE: {
      return {
        ...state,
        totalRevenue: payload,
        loading: false,
      };
    }
    case GET_CONVERSION_RATE: {
      return {
        ...state,
        conversionRate: payload,
      };
    }
    default: {
      return state;
    }
  }
};
