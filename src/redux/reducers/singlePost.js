import {
  GET_SINGLE_POST_START,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
} from "../actions/types";

const initialState = {
  post: [],
  slug: "",
  loading: false,
  error: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SINGLE_POST_START:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case GET_SINGLE_POST_SUCCESS:
      return {
        ...state,
        post: payload.data.items[0],
        slug: payload.data.items[0].fields.slug,
        loading: false,
      };
    case GET_SINGLE_POST_ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
}
