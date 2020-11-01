import {
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOG_OUT,
  USER_LOADED,
  AUTH_ERR,
} from "../actions/constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function AuthReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESSFUL:
    case LOGIN_SUCCESSFUL:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    case REGISTER_FAILED:
    case LOGIN_FAILED:
    case LOG_OUT:
    case AUTH_ERR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: {
          id: null,
          name: null,
          email: null,
          avatar: null
        }
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    default:
      return state;
  }
}
