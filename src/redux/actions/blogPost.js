import axios from "axios";

export const GET_BLOGPOST_START = "GET_BLOGPOST_START";
export const GET_BLOGPOST_SUCCESS = "GET_BLOGPOST_SUCCESS";
export const GET_BLOGPOST_ERROR = "GET_BLOGPOST_ERROR";

const API_BASE_URL = "https://cdn.contentful.com";
const API_SPACE_ID = "q2fivpqovvam";
const API_TOKEN = "aq9YgRIXsgEKRLXG8bAC2mM5wChSJddYq2dSbvpS89k";

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
