import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

import { Reducers } from "../reducers/rootReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	Reducers,
	composeEnhancers(applyMiddleware(createLogger(), ReduxThunk))
);
//export const store = createStore(Reducers,{},applyMiddleware(createLogger()))
