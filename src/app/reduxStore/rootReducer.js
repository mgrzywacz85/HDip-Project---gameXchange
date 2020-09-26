import { combineReducers } from "redux";
import PostReducer from "../../posts/postRedux/PostReducer";

const rootReducer = combineReducers({
  postStore: PostReducer
});

export default rootReducer;
