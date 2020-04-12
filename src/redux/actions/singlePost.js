import axios from "axios";

import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../../contentful";

import {
  GET_SINGLE_POST_START,
  GET_SINGLE_POST_SUCCESS,
  GET_SINGLE_POST_ERROR,
} from "./types";

export const getSinglePost = (slug) => (dispatch) => {
  dispatch({ type: GET_SINGLE_POST_START });
  axios
    .get(
      // `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries/${id}?access_token=${API_TOKEN}`
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost&fields.slug=${slug}`
    )
    .then((res) => {
      console.log("get single post result - ", res);
      dispatch({ type: GET_SINGLE_POST_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_SINGLE_POST_ERROR,
        payload: "error fetching single post from api",
      });
    });
};
