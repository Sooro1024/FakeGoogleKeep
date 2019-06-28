import { combineReducers } from "redux";
import { mathReducer } from "./reducer";
import { getData } from "./getData";
import { checkLogIn } from "./checkLogIn";
import { userDataRed } from "./userDataRed";
import { connectRouter } from 'connected-react-router'


export const Reducers = (history) => combineReducers({
	router: connectRouter(history),
	mathReducer,
	getData,
	checkLogIn,
	userDataRed
});
