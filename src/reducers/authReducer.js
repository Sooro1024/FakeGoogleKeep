const initialState = {
  auth: false,
  authError: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SIGN_IN_FAILED":
      return { ...state, authError: payload };
    case "SIGN_IN_SUCCESS":
      return { ...state, auth: true, authError: null };
    case "SIGN_OUT_SUCCESS":
      return { ...state, auth: false, authError: null };
    case "SIGN_OUT_FAILED":
      return { ...state, auth: true, authError: payload };
    case "SIGN_UP_FAILED":
      return { ...state, auth: false, authError: payload };
    case "SIGN_UP_SUCCESS":
      return { ...state, auth: true, authError: null };
    default:
      return state;
  }
};
