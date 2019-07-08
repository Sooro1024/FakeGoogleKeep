const initialState = {
  error: null,
  data: null,
  loading: false,
  curentDeskName: null,
  curentDeskKey: null
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
    case "DESK_ARE_CLICKED":
      return {
        ...state,
        curentDeskName: payload.curentDeskName,
        curentDeskKey: payload.curentDeskKey
      };
    case "GET_DESKS_ARE_FAILED":
      return { ...state, error: payload };

    default:
      return state;
  }
};
