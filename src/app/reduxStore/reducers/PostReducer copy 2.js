import { GET_POSTS, POST_ERROR } from "../actions/constants";

const initialState = {
  posts: [],
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
    case POST_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    default:
      return state;
  }
}
