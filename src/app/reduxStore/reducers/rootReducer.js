import { combineReducers } from "redux";
import PostReducer from "./PostReducer";

const rootReducer = combineReducers({
  postStore: PostReducer
});

export default rootReducer;
