import {
  ADD_FEEDBACK,
  ERROR_FEEDBACK,
  GET_ALL_FEEDBACK,
  LOADING_FEEDBACK,
  RESET_FEEDBACK,
} from "./Feedback.types";

const initialState = {
  feedback: [],
  loading: false,
  error: false,
};

export const feedbackReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_FEEDBACK: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ERROR_FEEDBACK: {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    case GET_ALL_FEEDBACK: {
      return {
        ...state,
        feedback: action.payload,
        loading: false,
        error: false,
      };
    }
    case ADD_FEEDBACK: {
      return { ...state };
    }
    case RESET_FEEDBACK: {
      return initialState;
    }
    default: {
      return state;
    }
  }
};
