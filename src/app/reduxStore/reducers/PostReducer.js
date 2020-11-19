import {
  GET_POSTS,
  GET_SELECTED_POST,
  POST_ERR,
  ADD_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  DELETE_POST,
  CLICK_LIKE,
  ACCEPT_XCHANGE,
  COMPLETE_XCHANGE,
} from "../actions/constants";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {},
};

export default function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };
    case GET_SELECTED_POST:
      return {
        ...state,
        post: payload,
        loading: false,
      };
    case POST_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
        loading: false,
      };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
        loading: false,
      };

    case CLICK_LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === payload.postId ? { ...post, likes: payload.likes } : post
        ),
        loading: false,
      };
    case ADD_COMMENT:
      return {
        ...state,
        post: { ...state.post, comments: payload },
        loading: false,
      };
    case DELETE_COMMENT:
      return {
        ...state,
        post: {
          ...state.post,
          comments: state.post.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    case ACCEPT_XCHANGE:
    case COMPLETE_XCHANGE:
      return { ...state, post: payload, loading: false };
    default:
      return state;
  }
}
