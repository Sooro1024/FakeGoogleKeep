const initialState = {
  loading: false,
  projects: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "NEW_PROJECT_ADDED":
      return { ...state, loading: true };
    case "NEW_PROJECT_ADD_FAILED":
      return { ...state, error: payload };
    case "PROJECTS_ARE_GETED":
      return { ...state, projects: payload, loading: false };
    case "PROJECT_ARE_DELETED":
      return { ...state, loading: true };
    case "PROJECT_IS_COMPLETE":
      return { ...state, loading: true };

    default:
      return state;
  }
};
