import { combineReducers } from "redux";
import PostReducer from "../../components/posts/postRedux/PostReducer";

const rootReducer = combineReducers({
  postStore: PostReducer
});

export default rootReducer;
