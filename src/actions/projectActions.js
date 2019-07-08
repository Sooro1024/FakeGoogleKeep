export const addNewProjectAction = (payload, key) => async (
  dispatch,
  getState,
  { firestore }
) => {
  try {
    const {
      authReducer: {
        userData: { uid }
      },
      deskReducer: { curentDeskName }
    } = getState();
    await firestore
      .collection(`users/${uid}/desksCollection/${key}/${curentDeskName}`)
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

export const deleteProjectAction = (key, projKey) => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    },
    deskReducer: { curentDeskName }
  } = getState();
  await firestore
    .doc(`users/${uid}/desksCollection/${key}/${curentDeskName}/${projKey}/`)
    .delete();
  dispatch({ type: "PROJECT_ARE_DELETED" });
};

export const getProjectsAction = key => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    },
    deskReducer: { curentDeskName }
  } = getState();
  const data = await firestore
    .collection(`users/${uid}/desksCollection/${key}/${curentDeskName}`)
    .get();
  const dat = data.docs.map(doc => {
    return { values: doc.data(), key: doc.id };
  });
  dispatch({ type: "PROJECTS_ARE_GETED", payload: dat });
};

export const completeProjectAction = (key, projKey, status) => async (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    },
    deskReducer: { curentDeskName }
  } = getState();
  await firestore
    .doc(`users/${uid}/desksCollection/${key}/${curentDeskName}/${projKey}/`)
    .update({ ProjectStatus: status });
  dispatch({ type: "PROJECT_IS_COMPLETE" });
};
