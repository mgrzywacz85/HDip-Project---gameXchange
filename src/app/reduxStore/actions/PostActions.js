import axios from "axios";
import { GET_POSTS, POST_ERR } from "./constants";

//GET all Posts

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");

    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
