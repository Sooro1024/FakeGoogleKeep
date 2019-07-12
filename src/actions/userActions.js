// eslint-disable-next-line import/prefer-default-export
export const searchUserByNicknameAction = search => async (
  dispatch,
  getState,
  { firestore }
) => {
  try {
    if (search === "") {
      dispatch({
        type: "SEARCH_RESULTS",
        payload: null
      });
    } else {
      const users = await firestore
        .collection("users")
        .where("nickName", "==", search)
        .get();
      const searchResult = users.docs.map(doc => {
        const data = doc.data();
        return { nickName: data.nickName, key: doc.id, isMamber: false };
      });
      dispatch({
        type: "SEARCH_RESULTS",
        payload: searchResult
      });
    }
  } catch (error) {
    dispatch({
      type: "SEARCH_FEILED",
      payload: error
    });
  }
};

export const addAContrebutorAction = userKey => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    firestoreReducer: { curentDeskKey, searchResult }
  } = getState();
  const snapshot = await firestore.doc(`Boards/${curentDeskKey}`).get();
  const contributors = snapshot.get("contributors");
  await firestore
    .doc(`Boards/${curentDeskKey}`)
    .set({ contributors: [...contributors, userKey] }, { merge: true });
  const res = searchResult.map(el =>
    el.key === userKey
      ? { nickName: el.nickName, key: el.key, isMamber: true }
      : el
  );
  dispatch({ type: "MEMBER_WAS_ADDED", payload: res });
};

export const getMembersAction = () => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    firestoreReducer: { curentDeskKey }
  } = getState();
  const snapshot = await firestore.doc(`Boards/${curentDeskKey}`).get();
  const contributors = snapshot.get("contributors");
  const members = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < contributors.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const snap = await firestore.doc(`users/${contributors[i]}`).get();
    const userInfo = snap.get("nickName");
    members[i] = { nickName: userInfo, key: contributors[i] };
  }
  dispatch({ type: "MEMBERS_WAS_GETED", payload: members });
};

export const deleteMemberAction = id => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    firestoreReducer: { curentDeskKey }
  } = getState();

  const snapshot = await firestore.doc(`Boards/${curentDeskKey}`).get();
  const data = snapshot.data();
  if (data.owner === id) {
    // eslint-disable-next-line no-alert
    alert("You can't delete an owner of board");
  } else {
    let newContributors = data.contributors.map(el =>
      el !== id ? el : undefined
    );
    newContributors = newContributors.filter(el => el !== undefined);
    await firestore
      .doc(`Boards/${curentDeskKey}`)
      .set({ contributors: newContributors }, { merge: true });
    dispatch({ type: "MEMBER_WAS_DELETED" });
  }
};
