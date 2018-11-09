const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error",action);
      return {
        ...state,
        authError: "Incorrect Password"
      };

    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null
      };

    case "SIGN_UP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error", action.err.message);
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default authReducer;
