// eslint-disable-next-line import/prefer-default-export
export const searchAction = search => async (
  dispatch,
  getState,
  { firestore }
) => {
  try {
    const users = await firestore
      .collection("users")
      .where("nickName", "==", search)
      .get();
    const searchResult = users.docs.map(doc => {
      return { values: doc.data(), key: doc.id };
    });
    dispatch({
      type: "SEARCH",
      payload: searchResult
    });
  } catch (error) {
    dispatch({
      type: "SEARCH_FEILED",
      payload: error
    });
  }
};

// ({
//   type: "SEARCH",
//   searchField: payload
// });
