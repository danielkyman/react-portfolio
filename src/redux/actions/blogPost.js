import axios from "axios";

import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../../contentful";

import {
  GET_BLOGPOST_START,
  GET_BLOGPOST_SUCCESS,
  GET_BLOGPOST_ERROR
} from "./types";

export const getBlogPost = () => dispatch => {
  dispatch({ type: GET_BLOGPOST_START });
  axios
    .get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=blogPost`
    )
    .then(res => {
      console.log("get blogPost result - ", res);
      dispatch({ type: GET_BLOGPOST_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_BLOGPOST_ERROR,
        payload: "error fetching data from api"
      });
    });
};
