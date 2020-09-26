import { combineReducers } from "redux";
import PostReducer from "../../posts/postRedux/PostReducer";

const rootReducer = combineReducers({
  post: PostReducer,
});

export default rootReducer;
