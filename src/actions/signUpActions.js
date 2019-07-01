export const SignUpAction = (payload, firebase, firestore) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password);
    const user = firebase.auth().currentUser;
    firestore
      .collection("users")
      .doc(user.uid)
      .set({
        email: payload.email,
        age: payload.age
      })
      .then(() => dispatch({ type: "SIGN_UP_SUCCESS" }))
      .catch(error => dispatch({ type: "SIGN_UP_FAILED", authError: error }));
  };
};
