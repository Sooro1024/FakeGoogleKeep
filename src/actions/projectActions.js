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
      .collection(`users/${uid}/desksCollection/${key}/${deskName}`)
      .add({
        ProjectName: payload.deskOrProjName,
        ProjectDetals: payload.deskOrProjValue,
        ProjectStatus: true
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
    .doc(`users/${uid}/desksCollection/${key}/${deskName}/${projKey}/`)
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
    .collection(`users/${uid}/desksCollection/${key}/${deskName}`)
    .get();
  const dat = data.docs.map(doc => {
    return { values: doc.data(), key: doc.id };
  });
  dispatch({ type: "PROJECTS_ARE_GETED", payload: dat });
};

export const completeProjectAction = (
  firestore,
  uid,
  key,
  deskName,
  projKey,
  status
) => async dispatch => {
  await firestore
    .doc(`users/${uid}/desksCollection/${key}/${deskName}/${projKey}/`)
    .update({ ProjectStatus: status });
  dispatch({ type: "PROJECT_IS_COMPLETE" });
};
