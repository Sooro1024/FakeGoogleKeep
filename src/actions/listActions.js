export const ListAddAction = newListName => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    deskReducer: { curentDeskKey }
  } = getState();
  let data = await firestore.doc(`Boards/${curentDeskKey}`).get();
  data = data.data();
  data.Containing = [...data.Containing, newListName];
  await firestore.doc(`Boards/${curentDeskKey}`).set({ ...data });
  await firestore
    .collection(`Boards/${curentDeskKey}/${newListName}`)
    .add({ ListName: newListName });
  dispatch({ type: "NEW_LIST_IS_ADDED" });
};

export const ListDeleteAction = payload => ({
  type: "ListDeleteAction",
  payload
});

// export const ListRenameAction = payload => ({
//   type: type,
//   payload
// });

// export const getListsAction = payload => ({
//   type: type,
//   payload
// });
