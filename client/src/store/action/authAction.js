import axios from 'axios';
import { Redirect } from "react-router-dom";
import React from 'react';


export const userCreated = () => {
  return {
    type: "SIGN_UP_SUCCESS",
  };
};

export const loginSuccess = () => {
  return {
    type: "LOGIN_SUCCESS",
  };
};

export const loginError = (payload) => {
  return {
    type: "LOGIN_ERROR",
    payload
  };
};


// Register User
export const register = (payload, history) => dispatch => {
  axios
    .post("/api/users/register", payload)
    .then(res => {
      if (res.status === 200) {
        console.log("userCreated 200" ,history)
        dispatch(userCreated(res.data));
      }
    })
    .catch(err => console.log("err", err));
};

// Login User
export const login = (payload, history) => dispatch => {
  axios
    .post("/api/users/login", payload)
    .then(res => dispatch(loginSuccess(res.data)))
    .catch(err => dispatch(loginError(err.response.status)));
    // .catch(err =>{
    //   if(err){
    //     console.log("yes",err.message , err.status )
    //   }
    //
    // });
};




