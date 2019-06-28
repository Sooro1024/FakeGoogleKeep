import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import { Reducers } from "../reducers/rootReducer";
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(preloadedState){
	const store = createStore(
		Reducers(history),
		composeEnhancers(applyMiddleware(createLogger(), ReduxThunk, routerMiddleware(history)))
	)
	
	return store
}
//export const store = createStore(Reducers,{},applyMiddleware(createLogger()))
