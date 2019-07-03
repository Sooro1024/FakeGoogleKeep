const initialState = {
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEW_DESK_ADDED":
      return { ...state };
    case "NEW_DESK_ADD_FAILED":
      return { ...state, error: payload };

    default:
      return state;
  }
};
