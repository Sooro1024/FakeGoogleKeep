export const addNewDeskAction = payload => async (
  dispatch,
  getState,
  { firestore }
) => {
  try {
    const {
      authReducer: {
        userData: { uid }
      }
    } = getState();
    await firestore.collection("Boards").add({
      description: payload.deskOrProjValue,
      name: payload.deskOrProjName,
      owner: uid,
      contributors: [uid],
      createDate: new Date(),
      Containing: []
    });
    dispatch({ type: "NEW_DESK_ADDED" });
  } catch (error) {
    dispatch({ type: "NEW_DESK_ADD_FAILED", payload: error });
  }
};

export const deleteDeskAction = key => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    }
  } = getState();
  const currentDoc = await firestore.doc(`Boards/${key}/`).get();
  if (currentDoc.get("owner") === uid) {
    await firestore.doc(`Boards/${key}/`).delete();
    dispatch({ type: "DESK_ARE_DELETED" });
  } else {
    alert("you are not owner of the board"); // eslint-disable-line no-alert
  }
};

export const DeskClickActon = (curentDeskName, curentDeskKey) => ({
  type: "DESK_ARE_CLICKED",
  payload: { curentDeskName, curentDeskKey }
});

export const getDeskboardsAction = () => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    }
  } = getState();
  const data = await firestore
    .collection(`Boards`)
    .where("contributors", "array-contains", uid)
    .get();
  const dat = data.docs.map(doc => {
    return { values: doc.data(), key: doc.id };
  });
  dispatch({ type: "DESKS_ARE_GETED", payload: dat });
};

// export const getDeskboardsAction = () => async (
//   dispatch,
//   getState,
//   { firestore, firebase }
// ) => {
//   const {
//     authReducer: {
//       userData: { uid }
//     }
//   } = getState();
//   const data = await firestore.collection(`users/${uid}/desksCollection`).get();
//   // /users/aYv0WZXCECaBjsC1Hwz9Yjdtt4V2/desksCollection/4uvsIQi0hGmp2fXONtoO/second desk
//   const store = firebase.firestore();
//   const a = await store.doc(`users/${uid}/`).get();
//   const b = await a.get("contrebutors");
//   const c = await Promise.all(b);
//   const snapshotsArray = [];
//   for (const each of c) {
//     snapshotsArray.push(await each.get());
//   }
//   const e = snapshotsArray.map(doc => {
//     return { values: doc.data(), key: doc.id };
//   });
//   console.log(snapshotsArray);
//   console.log(e);
//   const dat = data.docs.map(doc => {
//     return { values: doc.data(), key: doc.id };
//   });

//   dispatch({ type: "DESKS_ARE_GETED", payload: dat });
// };

// const addNewDeskAction = (payload, firestore, firebase) => async dispatch => {
//   const user = await firebase.auth().currentUser;
//   const existing = await firestore
//     .collection("users")
//     .doc(user.uid)
//     .collection("desksCollection")
//     .where("curentDeskName", "==", payload.newcurentDeskName)
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
//         curentDeskName: payload.newcurentDeskName
//       });
//     dispatch({ type: "ADDED" });
//   } else {
//     dispatch({ type: "THIS_NAME_EXIST" });
//   }
// };

// export default addNewDeskAction;
