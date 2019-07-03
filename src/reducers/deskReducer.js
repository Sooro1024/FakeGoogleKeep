const initialState = {
  error: null,
  data: null,
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEW_DESK_ADDED":
      return { ...state, loading: true };
    case "NEW_DESK_ADD_FAILED":
      return { ...state, error: payload };
    case "DESKS_ARE_GETED":
      return { ...state, data: payload, loading: false };
    case "DESK_ARE_DELETED":
      return { ...state, loading: true };

    default:
      return state;
  }
};
