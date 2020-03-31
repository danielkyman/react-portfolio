import {
  GET_BLOGPOST_START,
  GET_BLOGPOST_SUCCESS,
  GET_BLOGPOST_ERROR
} from "../actions/types";

const initialState = {
  blogPost: [],
  loading: false,
  error: ""
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGPOST_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case GET_BLOGPOST_SUCCESS:
      return {
        ...state,
        blogPost: payload.data.items,
        loading: false
      };
    case GET_BLOGPOST_ERROR:
      return {
        ...state,
        loading: false,
        error: payload
      };
    default:
      return state;
  }
}
