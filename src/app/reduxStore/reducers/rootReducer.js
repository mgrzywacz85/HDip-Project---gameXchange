import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import alert from './AlertReducer';

const rootReducer = combineReducers({
  alert,
  postStore: PostReducer
});

export default rootReducer;
