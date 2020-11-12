import axios from "axios";
import { setAlert } from "./AlertActions";
import {
  GET_POSTS,
  POST_ERR,
  CLICK_LIKE,
  ADD_POST,
  DELETE_POST,
  GET_SELECTED_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  ACCEPT_XCHANGE,
} from "./constants";

//GET all Posts

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts/");

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

//GET selected Post

export const getSelectedPost = (_id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${_id}`);

    dispatch({
      type: GET_SELECTED_POST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Add Post

export const addPost = ({
  category,
  title,
  description,
  preferredlocation,
  photo,
}) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    category,
    title,
    description,
    preferredlocation,
    photo,
  });

  try {
    const res = await axios.post("/api/posts/", body, config);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert("Post added"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }
};

//Like or Unlike Post

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

//Comment on Post

export const addCommentToPost = (postID, values) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios.post(
      `/api/posts/comment/${postID}`,
      values,
      config
    );

    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });

    dispatch(setAlert("Comment added"));
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

//Delete Comment from Post

export const deleteCommentFromPost = (postID, commentID) => async (
  dispatch
) => {
  try {
    await axios.delete(`/api/posts/comment/${postID}/${commentID}`);

    dispatch({
      type: DELETE_COMMENT,
      payload: commentID,
    });

    dispatch(setAlert("Comment deleted"));
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

// Delete Post

export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch({
      type: DELETE_POST,
      payload: postId,
    });

    dispatch(setAlert("Post deleted"));
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const acceptXchange = (postID, commentID) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/comment/${postID}/${commentID}/accept`);

    dispatch({
      type: ACCEPT_XCHANGE,
      payload: res.data,
    });

    dispatch(setAlert("Xchange Accepted"));
  } catch (err) {
    dispatch({
      type: POST_ERR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
