import {
  ADD_USERS,
  DELETE_USERS,
  ERROR_USERS,
  GET_ALL_USERS,
  LOADING_USERS,
  RESET_USERS,
  UPDATE_USERS,
} from "./Users.types";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USERS: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_USERS: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_ALL_USERS: {
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: false,
      };
    }
    case ADD_USERS:
    case UPDATE_USERS:
    case DELETE_USERS: {
      return { ...state };
    }
    case RESET_USERS: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
