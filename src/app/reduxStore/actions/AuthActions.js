import axios from "axios";
import { REGISTER_SUCCESSFUL, REGISTER_FAILED } from "./constants";

//Register user

export const registerAction = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post("api/user/general", body, config);

    dispatch({
      type: REGISTER_SUCCESSFUL,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.message);

    dispatch({
      type: REGISTER_FAILED,
    });
  }
};
