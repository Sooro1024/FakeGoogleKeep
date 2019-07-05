import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import userReducer from "./userReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import deskReducer from "./deskReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    userReducer,
    deskReducer,
    projectReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
  });
