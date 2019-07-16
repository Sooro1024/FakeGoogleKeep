// import firebase from "firebase/app";

// .where("contributors", "array-contains", uid)
// const firestore = firebase.firestore();

// eslint-disable-next-line import/prefer-default-export

// function onNext(snapshot, { dispatch }) {
//   const data = snapshot.docs.map(el => ({ key: el.id, values: el.data() }));
//   console.log(data);

//   dispatch({ type: "NOTIFICATION_LISTENER_ARE_SET", payload: data });
// }

// eslint-disable-next-line import/prefer-default-export
export const setLisenerForNotifications = () => (
  dispatch,
  getState,
  { firestore }
) => {
  const {
    authReducer: {
      userData: { uid }
    }
  } = getState();
  const next = snapshot => {
    const data = snapshot.docs.map(el => ({ key: el.id, values: el.data() }));

    dispatch({ type: "NOTIFICATION_LISTENER_ARE_SET", payload: data });
  };
  const error = err => {
    // eslint-disable-next-line no-console
    console.log(err);
  };
  const unsubscribe = firestore
    .collection("notifications")
    .where("contributors", "array-contains", uid)
    .onSnapshot(next, error);
  // console.log(unsubscribe);

  return unsubscribe;
};
