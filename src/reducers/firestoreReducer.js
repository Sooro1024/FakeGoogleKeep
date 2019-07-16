const initialState = {
  error: null,
  data: null,
  loading: false,
  listsLoading: false,
  listData: null,
  curentDeskName: null,
  curentDeskKey: null,
  searchResult: null,
  membersList: null,
  curentList: null,
  curentListKey: null,
  curentCardName: null,
  curentCardKey: null,
  cardLoading: false,
  cards: null,
  membersLoad: true,
  pushNotification: null
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
        curentDeskKey: payload.curentDeskKey,
        curentDeskIndex: payload.curentDeskIndex
      };
    case "GET_DESKS_ARE_FAILED":
      return { ...state, error: payload };
    case "LISTS_ARE_GATED":
      return { ...state, listData: payload, listsLoading: false };
    case "NEW_CARD_ADDED":
      return { ...state, cardLoading: true };
    case "CARDS_ARE_GATED":
      return {
        ...state,
        cardLoading: false,
        cards: { ...state.cards, ...payload }
      };
    case "CARD_WAS_DELETED":
      return { ...state, cardLoading: true };
    case "UPDATE_LIST_DATA":
      return { ...state, listsLoading: true };
    case "SEARCH_RESULTS":
      return { ...state, searchResult: payload };
    case "MEMBERS_WAS_GETED":
      return {
        ...state,
        membersList: payload,
        membersLoad: false
      };
    case "MEMBER_WAS_ADDED":
      return { ...state, searchResult: payload, membersLoad: true };
    case "MEMBER_WAS_DELETED":
      return { ...state, membersLoad: true };
    case "NOTIFICATION_LISTENER_ARE_SET":
      return { ...state, pushNotification: payload };

    default:
      return state;
  }
};
