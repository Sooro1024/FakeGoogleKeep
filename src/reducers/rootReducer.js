import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import firestoreReducer from "./firestoreReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    userReducer,
    firestoreReducer
  });
