import axios from "axios";

import { API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../../contentful";

import {
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR
} from "./types";

export const getProject = () => dispatch => {
  dispatch({ type: GET_PROJECT_START });
  axios
    .get(
      `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=project&order=-sys.createdAt`
    )
    .then(res => {
      console.log("get project result - ", res);
      dispatch({ type: GET_PROJECT_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: GET_PROJECT_ERROR,
        payload: "error fetching project from api"
      });
    });
};
