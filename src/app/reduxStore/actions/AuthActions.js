import axios from "axios";
import { setAlert } from "./AlertActions";
import {
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  LOG_OUT,
  USER_LOADED,
  AUTH_ERR,
  POST_ERR,
} from "./constants";
import AuthToken from "../../utils/AuthToken";

//Load user via auth backend route

export const loadUserAction = () => async (dispatch) => {
  if (localStorage.token) {
    AuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERR,
    });
  }
};

//Register user

export const registerAction = ({ name, email, avatar, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, avatar, password });

  try {
    //This is where axios makes the HTTP request

    const res = await axios.post("api/user/general", body, config);

    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: res.data,
    });

    //and because the Token is available, auto-load user

    dispatch(loadUserAction());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: REGISTER_FAILED,
    });
  }
};

//Login user

export const loginAction = ({ email, password }) => async (dispatch) => {
  const config = {

    //First need to set up the headers

    headers: {
      "Content-Type": "application/json",
    },
  };

  //then prepare the body of the request

  const body = JSON.stringify({ email, password });

  try {
    //This is where axios makes the HTTP request

    const res = await axios.post("api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data,
    });

    dispatch(loadUserAction());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

//Log out

export const logoutAction = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
  dispatch({ type: POST_ERR });
};
