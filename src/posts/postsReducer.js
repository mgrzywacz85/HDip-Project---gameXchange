import testing1 from "../app/mockAPIForTesting/testing1";
import { CREATE_POST, DELETE_POST, UPDATE_POST } from "./postsConstants";

const defaultState = {
  posts: testing1,
};

export default function postReducer(state = defaultState, { type, payload }) {
  switch (type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case UPDATE_POST:
      return {
        ...state,
        posts: [state.posts.filter((post) => post.id !== payload.id), payload],
      };
    case DELETE_POST:
      return {
        ...state,
        posts: [state.posts.filter((post) => post.id !== payload)],
      };
    default:
      return state;
  }
}
