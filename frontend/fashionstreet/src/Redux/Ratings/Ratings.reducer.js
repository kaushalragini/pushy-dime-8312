import {
  ADD_RATINGS,
  DELETE_RATINGS,
  ERROR_RATINGS,
  GET_ALL_RATINGS,
  LOADING_RATINGS,
  RESET_RATINGS,
  UPDATE_RATINGS,
} from "./Ratings.types";

const initialState = {
  ratings: [],
  loading: false,
  error: false,
};

export const ratingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_RATINGS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_RATINGS: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_ALL_RATINGS: {
      return {
        ...state,
        ratings: action.payload,
        loading: false,
        error: false,
      };
    }
    case ADD_RATINGS:
    case UPDATE_RATINGS:
    case DELETE_RATINGS: {
      return { ...state };
    }
    case RESET_RATINGS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
