// const addNewDeskAction = (payload, firestore, firebase) => async dispatch => {
//   const user = await firebase.auth().currentUser;
//   const existing = await firestore
//     .collection("users")
//     .doc(user.uid)
//     .collection("desksCollection")
//     .where("DeskName", "==", payload.newDeskName)
//     .get()
//     .then(ev => console.log(ev));

//   // console.log(existing);
//   if (existing !== undefined) {
//     await firestore
//       .collection("users")
//       .doc(user.uid)
//       .collection("desksCollection")
//       .add({
//         DeskDescription: payload.newDeskDeskrip,
//         DeskName: payload.newDeskName
//       });
//     dispatch({ type: "ADDED" });
//   } else {
//     dispatch({ type: "THIS_NAME_EXIST" });
//   }
// };

// export default addNewDeskAction;

export const addNewDeskAction = (
  payload,
  firestore,
  firebase
) => async dispatch => {
  try {
    const user = await firebase.auth().currentUser;
    await firestore
      .collection("users")
      .doc(user.uid)
      .collection("desksCollection")
      .add({
        DeskDescription: payload.deskOrProjValue,
        DeskName: payload.deskOrProjValue
      });
    dispatch({ type: "NEW_DESK_ADDED" });
  } catch (error) {
    dispatch({ type: "NEW_DESK_ADD_FAILED", payload: error });
  }
};

export const deleteDeskAction = (firestore, uid, key) => async dispatch => {
  await firestore
    .collection("users")
    .doc(uid)
    .collection("desksCollection")
    .doc(key)
    .delete();
  dispatch({ type: "DESK_ARE_DELETED" });
};

export const getDeskboardsAction = (firestore, uid) => async dispatch => {
  const data = await firestore
    .collection("users")
    .doc(uid)
    .collection("desksCollection")
    .get();
  const dat = data.docs.map(doc => {
    return { values: doc.data(), key: doc.id };
  });
  dispatch({ type: "DESKS_ARE_GETED", payload: dat });
};

export const DeskClickActon = payload => ({
  type: "DESK_ARE_CLICKED",
  payload
});
