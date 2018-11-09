import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';
import React from 'react';
import jwt_decode from 'jwt-decode';

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
    .then(res =>{
      // Save to localStorage
      const { token } = res.data;
      console.log("token",token)
      // Set token to ls
      localStorage.setItem('jwtToken', token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: "GET_ERRORS",
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: "SET_CURRENT_USER",
    payload: decoded
  };
};




