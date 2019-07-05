const initialState = {
  searchResult: null,
  error: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH":
      return { ...state, searchResult: payload };
    case "SEARCH_FEILED":
      return { ...state, error: payload };
    default:
      return state;
  }
};
