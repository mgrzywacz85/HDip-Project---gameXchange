import axios from "axios";

const AuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-access-token"] = token;  
    
    //this takes token from the local storage and puts it in the axios global header
    //and so every axios request will have this header and token included by default
    //if the token is present in local storage

  } else {
    delete axios.defaults.headers.common["x-access-token"];

    //if there is no token in local storage the header will be removed from axios requests
  }
};

export default AuthToken;
