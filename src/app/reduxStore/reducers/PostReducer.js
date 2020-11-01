import { GET_POSTS, POST_ERR } from "../actions/constants";

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export default function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false
      };
    case POST_ERR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
