import { SET_CURRENT_USER } from '../types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error:''
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
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      }
    default:
      return state;
  }
}

