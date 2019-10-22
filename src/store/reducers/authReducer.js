const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR");
      return {
        ...state,
        authError: "Login Failed"
      };
    case "LOGOUT_SUCCESS":
      console.log('signout success');
      return state;
    case "SIGNUP_SUCCESS":
      console.log('SignUpSuccess');
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log('Signup Error');
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
    
  }
};

export default authReducer;
