import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import alert from './AlertReducer';
import AuthReducer from './AuthReducer';

const rootReducer = combineReducers({
  alert,
  AuthReducer,
  postStore: PostReducer
});

export default rootReducer;
