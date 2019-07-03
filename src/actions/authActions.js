import { push } from "connected-react-router";

export const SignInAction = (payload, firebase) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => dispatch({ type: "SIGN_IN_SUCCESS" }))
      .then(() => dispatch(push("/home")))
      .catch(error => dispatch({ type: "SIGN_IN_FAILED", payload: error }));
  };
};

export const SignOutAction = (payload, firebase) => {
  return dispatch => {
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "SIGN_OUT_SUCCESS" }))
      .catch(error => dispatch({ type: "SIGN_OUT_FAILED", payload: error }));
  };
};

export const SignUpAction = (
  payload,
  firebase,
  firestore
) => async dispatch => {
  try {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password);
    const user = await firebase.auth().currentUser;
    await firestore
      .collection("users")
      .doc(user.uid)
      .set({
        email: payload.email,
        age: payload.age,
        nickName: payload.nickName,
        firstName: payload.firstName,
        lastName: payload.lastName
      });
    dispatch({ type: "SIGN_UP_SUCCESS" });
    dispatch(push("/home"));
  } catch (error) {
    dispatch({ type: "SIGN_UP_FAILED", payload: error });
  }
  // console.log(user);
  // return dispatch => {
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(payload.email, payload.password)
  //     .then(() => firebase.auth().currentUser)
  //     .then(user =>
  //       firestore
  //         .collection("users")
  //         .doc(user.uid)
  //         .set({
  //           email: payload.email,
  //           age: payload.age,
  //           nickName: payload.nickName,
  //           firstName: payload.firstName,
  //           lastName: payload.lastName
  //         })
  //     )
  //     .then(() => dispatch({ type: "SIGN_UP_SUCCESS" }))
  //     .catch(error => dispatch({ type: "SIGN_UP_FAILED", payload: error }));
  // };
};
