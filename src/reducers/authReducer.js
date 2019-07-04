const initialState = {
  auth: false,
  userData: null,
  authError: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGN_IN_FAILED":
      return { ...state, authError: payload, userData: null };
    case "SIGN_IN_SUCCESS":
      return { ...state, auth: true, authError: null, userData: payload };
    case "SIGN_OUT_SUCCESS":
      return { ...state, auth: false, authError: null, userData: null };
    case "SIGN_OUT_FAILED":
      return { ...state, auth: true, authError: payload };
    case "SIGN_UP_FAILED":
      return { ...state, auth: false, authError: payload };
    case "SIGN_UP_SUCCESS":
      return { ...state, auth: true, authError: null, userData: payload };
    default:
      return state;
  }
};
