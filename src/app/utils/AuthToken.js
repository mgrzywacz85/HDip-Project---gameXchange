import axios from "axios";

const AuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token;  
    
    //This takes the Token from the local storage and puts it in the axios global header
    //and so every axios request will have this header and Token included by default
    //if the token is present in local storage

  } else {
    delete axios.defaults.headers.common["x-access-token"];

    //if there is no Token in local storage the header will be removed from axios requests
  }
};

export default AuthToken;
