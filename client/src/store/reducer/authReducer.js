import { SET_CURRENT_USER } from '../types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER :
      return {
        ...state,
        isAuthenticated: action.payload,
        user: action.payload
      };
    case "GET_ERRORS":
      console.log("signup error", action.payload);
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload
      }
    default:
      return state;
  }
}

