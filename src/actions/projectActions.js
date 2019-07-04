export const addNewProjectAction = (
  payload,
  firestore,
  uid,
  key,
  deskName
) => async dispatch => {
  try {
    console.log(uid, key, deskName, payload);
    await firestore
      .collection("users")
      .doc(uid)
      .collection("desksCollection")
      .doc(key)
      .collection(deskName)
      .add({
        ProjectName: payload.deskOrProjName,
        ProjectDetals: payload.deskOrProjValue
      });
    dispatch({ type: "NEW_PROJECT_ADDED" });
  } catch (error) {
    dispatch({ type: "NEW_PROJECT_ADD_FAILED", payload: error });
  }
};

export const deleteProjectAction = (
  firestore,
  uid,
  key,
  deskName,
  projKey
) => async dispatch => {
  await firestore
    .collection("users")
    .doc(uid)
    .collection("desksCollection")
    .doc(key)
    .collection(deskName)
    .doc(projKey)
    .delete();
  dispatch({ type: "PROJECT_ARE_DELETED" });
};

export const getProjectsAction = (
  uid,
  key,
  deskName,
  firestore
) => async dispatch => {
  const data = await firestore
    .collection("users")
    .doc(uid)
    .collection("desksCollection")
    .doc(key)
    .collection(deskName)
    .get();
  const dat = data.docs.map(doc => {
    return { values: doc.data(), key: doc.id };
  });
  dispatch({ type: "PROJECTS_ARE_GETED", payload: dat });
};
