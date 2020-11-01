import axios from "axios";
import { CLICK_LIKE, GET_POSTS, POST_ERR } from "./constants";

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
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Like Post

export const clickLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/like/${postId}`);

    dispatch({
      type: CLICK_LIKE,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    if (err.response.status === 400) {
      const res = await axios.put(`/api/posts/unlike/${postId}`);

      dispatch({
        type: CLICK_LIKE,
        payload: { postId, likes: res.data },
      });
    } else {
      dispatch({
        type: POST_ERR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  }
};
