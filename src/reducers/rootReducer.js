import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });
