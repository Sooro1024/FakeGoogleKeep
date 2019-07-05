// eslint-disable-next-line import/prefer-default-export
export const searchAction = (search, firestore) => async dispatch => {
  try {
    const users = await firestore
      .collection("users")
      .where("nickName", "==", search)
      .get();
    const searchResult = users.docs.map(doc => {
      return { values: doc.data(), key: doc.id };
    });
    console.log(searchResult);
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
