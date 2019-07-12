import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import authReducer from "./authReducer";
import firestoreReducer from "./firestoreReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    authReducer,
    firestoreReducer
  });
