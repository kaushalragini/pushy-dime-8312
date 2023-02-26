import {
  ADMIN_LOGIN,
  ADMIN_LOGOUT,
  GET_USER_DETAILS,
  RESET_LOGIN,
  USER_LOGIN,
  USER_LOGOUT,
} from "./Auth.types";

const initialState = {
  userAuth: false,
  adminAuth: false,
  token: "",
  userData: {},
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN: {
      return {
        ...state,
        userAuth: true,
        token: payload,
      };
    }
    case GET_USER_DETAILS: {
      return {
        ...state,
        userData: payload,
      };
    }
    case ADMIN_LOGIN: {
      return {
        ...state,
        adminAuth: true,
        token: payload,
      };
    }
    case USER_LOGOUT: {
      return {
        ...state,
        userAuth: false,
        token: "",
      };
    }
    case ADMIN_LOGOUT: {
      return {
        ...state,
        adminAuth: false,
        token: "",
      };
    }
    case RESET_LOGIN: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
