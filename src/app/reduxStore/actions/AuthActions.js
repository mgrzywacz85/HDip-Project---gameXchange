import axios from "axios";
import { setAlert } from "./AlertActions";
import {
  REGISTER_SUCCESSFUL,
  REGISTER_FAILED,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  USER_LOADED,
  AUTH_ERR,
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

export const registerAction = ({ name, email, password }) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    //this is where axios makes the http request

    const res = await axios.post("api/user/general", body, config);

    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: res.data,
    });

    //and because the token is available, auto-load user

    dispatch((loadUserAction()));

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

    //first need to set up the headers

    headers: {
      "Content-Type": "application/json",
    },
  };

  //then prepare the body of the request

  const body = JSON.stringify({ email, password });

  try {
    //this is where axios makes the http request

    const res = await axios.post("api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESSFUL,
      payload: res.data,
    });

    dispatch((loadUserAction()));

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
