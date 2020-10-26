import { testing1 } from "../../mockAPIForTesting/testing1";

const initialState = {
  posts: testing1,
};

export default function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, payload]
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: [...state.posts.filter((selectedPost) => selectedPost.id !== payload.id), payload]
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: [...state.posts.filter((selectedPost) => selectedPost.id !== payload.id)]
      };
    default:
      return state;
  }
}
