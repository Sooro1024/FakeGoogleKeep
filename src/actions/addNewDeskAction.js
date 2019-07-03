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

const addNewDeskAction = (payload, firestore, firebase) => async dispatch => {
  try {
    const user = await firebase.auth().currentUser;
    await firestore
      .collection("users")
      .doc(user.uid)
      .collection("desksCollection")
      .add({
        DeskDescription: payload.newDeskDeskrip,
        DeskName: payload.newDeskName
      });
    dispatch({ type: "NEW_DESK_ADDED" });
  } catch (error) {
    dispatch({ type: "NEW_DESK_ADD_FAILED", payload: error });
  }
};

export default addNewDeskAction;
