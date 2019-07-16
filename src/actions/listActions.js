export const ListAddAction = newListName => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    firestoreReducer: { curentDeskKey },
    authReducer: {
      userData: { uid }
    }
  } = getState();
  await firestore.collection("Lists").add({
    inDesk: curentDeskKey,
    createdBy: uid,
    date: new Date().toDateString(),
    listName: newListName
  });
  dispatch({ type: "UPDATE_LIST_DATA" });
};

export const getListsAction = () => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    firestoreReducer: { curentDeskKey }
  } = getState();
  const snapshot = await firestore
    .collection("Lists")
    .where("inDesk", "==", curentDeskKey)
    .get();
  const data = snapshot.docs.map(el => ({ key: el.id, ...el.data() }));
  dispatch({ type: "LISTS_ARE_GATED", payload: data });
};

export const renameListAction = (listKey, newName) => async (
  dispatch,
  getState,
  { firestore }
) => {
  await firestore
    .doc(`Lists/${listKey}`)
    .set({ listName: newName }, { merge: true });
  dispatch({ type: "UPDATE_LIST_DATA" });
};

export const deleteListAction = listKey => async (
  dispatch,
  getState,
  { firestore }
) => {
  await firestore.doc(`Lists/${listKey}`).delete();
  dispatch({ type: "UPDATE_LIST_DATA" });
};

// export const ListAddAction = newListName => async (
//   dispatch,
//   getState,
//   { firestore }
// ) => {
//   const {
//     firestoreReducer: { curentDeskKey },
//     authReducer: {
//       userData: { uid }
//     }
//   } = getState();
//   let data = await firestore.doc(`Boards/${curentDeskKey}`).get();
//   data = data.data();
//   const dataWillAdd = {
//     name: newListName,
//     createdBy: uid,
//     date: new Date().toDateString()
//   };
//   data.containing = [...data.containing, dataWillAdd];
//   await firestore.doc(`Boards/${curentDeskKey}`).set({ ...data });
//   dispatch({ type: "NEW_LIST_IS_ADDED" });
// };
