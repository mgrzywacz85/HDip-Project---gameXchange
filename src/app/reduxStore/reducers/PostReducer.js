import { GET_POSTS, POST_ERR, CLICK_LIKE } from "../actions/constants";

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
    case CLICK_LIKE:
      return {
        ...state,
        posts: state.posts.map(post => post._id === payload.postId ? {...post,
           likes: payload.likes} : post),
           loading: false
      };
    default:
      return state;
  }
}
