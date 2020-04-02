import {
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR
} from "../actions/types";

const initialState = {
  projects: [],
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case GET_PROJECT_SUCCESS:
      return {
        ...state,
        projects: payload.data.items,
        loading: false
      };
    case GET_PROJECT_ERROR:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}
